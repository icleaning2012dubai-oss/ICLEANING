import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { GalleryPhoto } from '@/lib/models/GalleryPhoto';
import cloudinary from '@/lib/cloudinary';

// GET /api/gallery-photos/[id]
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const photo = await GalleryPhoto.findById(id).lean();
    if (!photo) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(photo);
  } catch (error) {
    console.error('GalleryPhoto GET [id] error:', error);
    return NextResponse.json({ error: 'Failed to fetch photo' }, { status: 500 });
  }
}

// PUT /api/gallery-photos/[id]
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();
    const updated = await GalleryPhoto.findByIdAndUpdate(id, body, { new: true }).lean();
    if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(updated);
  } catch (error) {
    console.error('GalleryPhoto PUT error:', error);
    return NextResponse.json({ error: 'Failed to update photo' }, { status: 500 });
  }
}

// DELETE /api/gallery-photos/[id]
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const photo = await GalleryPhoto.findByIdAndDelete(id);
    if (!photo) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    // Also delete from Cloudinary if we have a publicId
    if (photo.publicId) {
      try {
        await cloudinary.uploader.destroy(photo.publicId);
      } catch (e) {
        console.warn('Cloudinary delete failed (continuing):', e);
      }
    }

    return NextResponse.json({ message: 'Deleted' });
  } catch (error) {
    console.error('GalleryPhoto DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete photo' }, { status: 500 });
  }
}
