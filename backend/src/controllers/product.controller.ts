export async function getAllProducts(req: Request, res: Response) {
	try {
		const products = await ProductModel.find();
		res.json(products);
	} catch (err) {
		res.status(500).json({ message: 'Failed to fetch products', error: err });
	}
}

import { Request, Response } from 'express';
import { ProductModel } from '../models/product.model';

export async function createProduct(req: Request, res: Response) {
	try {
		const product = new ProductModel(req.body);
		const saved = await product.save();
		res.status(201).json(saved);
	} catch (err) {
		res.status(400).json({ message: 'Product creation failed', error: err });
	}
}

export async function getProduct(req: Request, res: Response) {
	try {
		const product = await ProductModel.findById(req.params.id);
		if (!product) return res.status(404).json({ message: 'Product not found' });
		res.json(product);
	} catch (err) {
		res.status(400).json({ message: 'Get product failed', error: err });
	}
}

export async function getReport(req: Request, res: Response) {
	// TODO: Implement get report logic
	res.json({ message: 'Get report (stub)' });
}
