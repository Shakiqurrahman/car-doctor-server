import { Router } from "express";
import { AllServices, getSingleService } from "../controllers/servicesController.js";

const router = Router();

router.get("/services", AllServices);
router.get("/services/:id", getSingleService);

export default router;