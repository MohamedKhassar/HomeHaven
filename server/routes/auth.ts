
import { Router } from "express";
import { loginUser, registerUser } from "../controllers/Auth";
import { userValidationRules } from "../validator/registerValidator";
import { validate } from "../middleware/validateData";
import { loginValidationRules } from "../validator/loginValidator";
const router = Router()

router.post("/login", loginValidationRules(), validate, loginUser)
router.post("/register", userValidationRules(), validate, registerUser)

export default router