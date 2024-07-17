import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/register', (req: Request, res: Response) => {
    // replace with controller services to make the app db interactions

    res.status(200).json({ message: 'User registered successfully' });
});

router.post('/login', (req: Request, res: Response) => {
    res.status(200).json({ message: 'User logged in successfully' });
});

router.post('/logout', (req: Request, res: Response) => {
    res.status(200).json({ message: 'User logged out successfully' });
});

export { router as authRoutes };