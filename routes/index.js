import express, { Router } from "express";
import controller from "../controllers";
const app = express();
const router = Router();

router.get("/non-working-days", (req, res) => {
  controller.list(req, res);
});

router.post("/non-working-days", (req, res) => {
  controller.create(req, res);
});

router.put("/non-working-days", (req, res) => {
  controller.update(req, res);
});

app.use(router);

export default app;
