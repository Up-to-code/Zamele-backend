import { Request, Response } from 'express';
import { createUser } from '../models/user';

export default async function healthController(req: Request, res: Response) {
  if (req.query.test === 'prisma') {
    try {
      const user = await createUser('test@example.com', 'Test User');
      return res.json({ status: 'ok', user });
    } catch (e) {
      console.error(e);
      const errorMsg = e instanceof Error ? e.message : String(e);
      return res.status(500).json({ status: 'error', error: errorMsg });
    }
  }
  res.json({ status: 'ok' });
} 