import express from 'express';
import productsController from '../controllers/products-controller';
import verifyUserMiddleware from '../middlewares/verify-user-middleware';
import HttpError from '../utils/httpError';

const router = express.Router();

router.get('/products', verifyUserMiddleware, productsController.findAll);
// router.get(
//   '/users/:id',
//   verifyUserMiddleware,
//   (req, res, next) => {
//     if (req.user.isAdmin) next();
//     if (req.params.id === req.user.id) next();
//     else next(new HttpError('...', 400));
//   },
//   productsController.findAll,
// );

router.post('/products', productsController.create);
export default router;
