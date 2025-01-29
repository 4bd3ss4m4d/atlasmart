import { Router } from "express";
import authRoutes from "#routes/v1/auth.routes.js";
import userRoutes from "#routes/v1/users.routes.js";
import productRoutes from "#routes/v1/products.routes.js";
import orderRoutes from "#routes/v1/orders.routes.js";
import categoryRoutes from "#routes/v1/categories.routes.js";
import cartRoutes from "#routes/v1/cart.routes.js";

const router = Router();

const routes = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/products",
    route: productRoutes,
  },
  {
    path: "/orders",
    route: orderRoutes,
  },
  {
    path: "/categories",
    route: categoryRoutes,
  },
  {
    path: "/cart",
    route: cartRoutes,
  },
];

routes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
