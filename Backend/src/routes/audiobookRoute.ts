import express from 'express';
import * as controller from "../controllers/audiobookController";

const router = express.Router();

router.post('/create', controller.create);
router.get('/', controller.getAll);
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)
router.get('/stats', controller.stats)



export default router;