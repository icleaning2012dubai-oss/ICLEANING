import mongoose, { Schema, Document } from 'mongoose';

export interface IGalleryPhoto extends Document {
  url: string;          // Cloudinary URL
  publicId: string;     // Cloudinary public_id for deletion
  alt: string;
  category: 'cleaning' | 'carpet' | 'sofa' | 'curtains' | 'ac' | 'other';
  width: number;
  height: number;
  published: boolean;
  order: number;
  source: 'upload' | 'gdrive' | 'url';
  createdAt: Date;
  updatedAt: Date;
}

const GalleryPhotoSchema = new Schema<IGalleryPhoto>(
  {
    url:       { type: String, required: true },
    publicId:  { type: String, default: '' },
    alt:       { type: String, default: '' },
    category:  { type: String, default: 'other', index: true },
    width:     { type: Number, default: 1200 },
    height:    { type: Number, default: 800 },
    published: { type: Boolean, default: true },
    order:     { type: Number, default: 0 },
    source:    { type: String, default: 'upload' },
  },
  { timestamps: true }
);

export const GalleryPhoto =
  mongoose.models.GalleryPhoto ||
  mongoose.model<IGalleryPhoto>('GalleryPhoto', GalleryPhotoSchema);
