import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Estou de volta e com rotas organizadas!' })
})

export default router;