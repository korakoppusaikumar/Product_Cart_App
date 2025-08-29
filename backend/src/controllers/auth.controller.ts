import { Request, Response } from 'express';

export async function register(req: Request, res: Response) {
	// TODO: Implement registration logic
	res.status(201).json({ message: 'User registered (stub)' });
}

export async function login(req: Request, res: Response) {
	// TODO: Implement login logic
	res.json({ message: 'User login (stub)' });
}
