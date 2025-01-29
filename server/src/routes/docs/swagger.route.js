import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "#config/swagger/swagger.config.js";

const router = Router();

// Serve Swagger API documentation
router.use("/", swaggerUi.serve);
router.get(
  "/",
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "AtlasMart API Documentation",
  })
);

export default router;
