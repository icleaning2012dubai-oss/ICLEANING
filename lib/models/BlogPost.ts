import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogPost extends Document {
  slug: string;
  title: { ru: string; en: string; ar: string };
  excerpt: { ru: string; en: string; ar: string };
  content: { ru: string; en: string; ar: string };
  coverImage: string;
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: {
      ru: { type: String, required: true },
      en: { type: String, required: true },
      ar: { type: String, default: '' },
    },
    excerpt: {
      ru: { type: String, required: true },
      en: { type: String, required: true },
      ar: { type: String, default: '' },
    },
    content: {
      ru: { type: String, required: true },
      en: { type: String, required: true },
      ar: { type: String, default: '' },
    },
    coverImage: { type: String, required: true },
    tags: [{ type: String }],
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const BlogPost =
  mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);
