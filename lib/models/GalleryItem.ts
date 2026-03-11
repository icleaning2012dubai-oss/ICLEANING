import mongoose, { Schema, Document } from 'mongoose';

export interface IGalleryItem extends Document {
  title: { ru: string; en: string; ar: string };
  description: { ru: string; en: string; ar: string };
  beforeImage: string;
  afterImage: string;
  service: string;
  tags: string[];
  published: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const GalleryItemSchema = new Schema<IGalleryItem>(
  {
    title: {
      ru: { type: String, required: true },
      en: { type: String, required: true },
      ar: { type: String, default: '' },
    },
    description: {
      ru: { type: String, default: '' },
      en: { type: String, default: '' },
      ar: { type: String, default: '' },
    },
    beforeImage: { type: String, required: true },
    afterImage: { type: String, required: true },
    service: { type: String, required: true, index: true },
    tags: [{ type: String }],
    published: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const GalleryItem =
  mongoose.models.GalleryItem ||
  mongoose.model<IGalleryItem>('GalleryItem', GalleryItemSchema);
