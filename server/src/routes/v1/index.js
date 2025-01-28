import { Router } from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./users.routes.js";
import productRoutes from "./products.routes.js";
import orderRoutes from "./orders.routes.js";
import categoryRoutes from "./categories.routes.js";
import cartRoutes from "./cart.routes.js";

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
