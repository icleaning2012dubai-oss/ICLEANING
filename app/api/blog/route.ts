import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { BlogPost } from '@/lib/models/BlogPost';

// GET /api/blog — list posts (optionally filter by published)
export async function GET(request: NextRequest) {
  try {
    if (!process.env.MONGODB_URI) return NextResponse.json([]);
    await connectDB();
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    const filter: Record<string, unknown> = {};
    if (published === 'true') filter.published = true;
    if (published === 'false') filter.published = false;

    const posts = await BlogPost.find(filter).sort({ createdAt: -1 }).lean();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Blog GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST /api/blog — create new post
export async function POST(request: NextRequest) {
  try {
    if (!process.env.MONGODB_URI) return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    await connectDB();
    const body = await request.json();
    const post = await BlogPost.create(body);
    return NextResponse.json(post, { status: 201 });
  } catch (error: any) {
    console.error('Blog POST error:', error);
    if (error.code === 11000) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
