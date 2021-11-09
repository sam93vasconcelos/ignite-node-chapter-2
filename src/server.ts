import express, { json } from "express";
import { router } from "./routes";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();
app.use(json());

app.use(router);

app.listen(3333, () => console.log("Server running"));
