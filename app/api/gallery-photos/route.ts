import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { GalleryPhoto } from '@/lib/models/GalleryPhoto';

// GET /api/gallery-photosж.
export async function GET(request: NextRequest) {
  try {
    if (!process.env.MONGODB_URI) return NextResponse.json([]);
    await connectDB();
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    const category  = searchParams.get('category');

    const limit  = Math.min(parseInt(searchParams.get('limit')  || '24'), 100);
    const skip   = Math.max(parseInt(searchParams.get('skip')   || '0'),  0);

    const filter: Record<string, unknown> = {};
    if (published === 'true')  filter.published = true;
    if (published === 'false') filter.published = false;
    if (category)              filter.category  = category;

    const [photos, total] = await Promise.all([
      GalleryPhoto.find(filter).sort({ order: 1, createdAt: -1 }).skip(skip).limit(limit).lean(),
      GalleryPhoto.countDocuments(filter),
    ]);
    return NextResponse.json({ photos, total, hasMore: skip + limit < total });
  } catch (error) {
    console.error('GalleryPhotos GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch photos' }, { status: 500 });
  }
}

// POST /api/gallery-photos  — create one or bulk-import many
export async function POST(request: NextRequest) {
  try {
    if (!process.env.MONGODB_URI)
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    await connectDB();
    const body = await request.json();

    // bulk import: array of photo objects
    if (Array.isArray(body)) {
      const inserted = await GalleryPhoto.insertMany(body, { ordered: false });
      return NextResponse.json({ inserted: inserted.length }, { status: 201 });
    }

    // single photo
    const photo = await GalleryPhoto.create(body);
    return NextResponse.json(photo, { status: 201 });
  } catch (error) {
    console.error('GalleryPhotos POST error:', error);
    return NextResponse.json({ error: 'Failed to create photo' }, { status: 500 });
  }
}
