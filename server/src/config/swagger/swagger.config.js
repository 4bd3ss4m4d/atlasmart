import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "AtlasMart API Documentation",
    version: "1.0.0",
    description: "API documentation for the AtlasMart e-commerce platform",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
    contact: {
      name: "Abdessamad HADDOUCHE",
      email: "abdessamad.hadd@gmail.com",
    },
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Development server",
    },
    {
      url: "https://api.atlasmart.com",
      description: "Production server",
    },
  ],
  tags: [
    { name: "Auth", description: "Authentication endpoints" },
    { name: "Users", description: "User management endpoints" },
    { name: "Products", description: "Product management endpoints" },
    { name: "Categories", description: "Category management endpoints" },
    { name: "Orders", description: "Order management endpoints" },
    { name: "Cart", description: "Shopping cart endpoints" },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/v1/*.routes.js"], // Path to the API routes
};

export const swaggerSpec = swaggerJSDoc(options);
