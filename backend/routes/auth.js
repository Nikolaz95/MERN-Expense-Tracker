import express from "express"
import { getAllUsers, getUserDetails, getUserProfile, loginUser, logoutUser, registerUser, updatePassword, updateProfile } from "../controllers/authControllers.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";


const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);


router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);


//admin

router.route("/admin/allUsers").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);

router
    .route("/admin/users/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails)


export default router;