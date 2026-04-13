import express from "express"
import { getUserProfile, loginUser, logoutUser, registerUser } from "../controllers/authControllers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";


const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);


router.route("/me").get(isAuthenticatedUser, getUserProfile);





export default router;