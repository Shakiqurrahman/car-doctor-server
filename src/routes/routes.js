import { Router } from "express";
import { AllServices } from "../controllers/servicesController.js";

const router = Router();

router.get("/services", AllServices);

export default router;