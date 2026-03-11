import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { GalleryItem } from '@/lib/models/GalleryItem';

// GET /api/gallery — list gallery items
export async function GET(request: NextRequest) {
  try {
    if (!process.env.MONGODB_URI) return NextResponse.json([]);
    await connectDB();
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    const service = searchParams.get('service');
    const filter: Record<string, unknown> = {};
    if (published === 'true') filter.published = true;
    if (published === 'false') filter.published = false;
    if (service) filter.service = service;

    const items = await GalleryItem.find(filter).sort({ order: 1, createdAt: -1 }).lean();
    return NextResponse.json(items);
  } catch (error) {
    console.error('Gallery GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 });
  }
}

// POST /api/gallery — create new gallery item
export async function POST(request: NextRequest) {
  try {
    if (!process.env.MONGODB_URI) return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    await connectDB();
    const body = await request.json();
    const item = await GalleryItem.create(body);
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error('Gallery POST error:', error);
    return NextResponse.json({ error: 'Failed to create gallery item' }, { status: 500 });
  }
}
