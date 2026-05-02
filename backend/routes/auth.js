import express from "express"
import { deleteOwnAccount, deleteUserAdmin, getAllUsers, getUserDetails, getUserProfile, loginUser, logoutUser, registerUser, updatePassword, updateProfile, updateUser, uploadAvatar } from "../controllers/authControllers.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";


const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);


router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/me/deleteAccount").delete(isAuthenticatedUser, deleteOwnAccount);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/upload_avatar").put(isAuthenticatedUser, uploadAvatar);

//admin

router.route("/admin/allUsers").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);

router
    .route("/admin/users/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails)
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateUser)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUserAdmin);


export default router;