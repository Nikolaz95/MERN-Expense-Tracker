import express from "express"
import { getUserProfile, loginUser, logoutUser, registerUser, updatePassword } from "../controllers/authControllers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";


const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);


router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);





export default router;