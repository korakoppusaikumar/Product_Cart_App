import mongoose, { Document, Schema } from 'mongoose';

export interface Product extends Document {
  name: string;
  category: string;
  price: number;
  created_at?: Date;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  created_at: { type: Date, default: Date.now }
}, { collection: 'products' });

export const ProductModel = mongoose.model<Product>('Product', ProductSchema);
