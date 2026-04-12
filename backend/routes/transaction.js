import express from "express"
import { createNewTransaction, deleteTransaction, getTransactionDetails, getVisitiList, updateTransactionDetails } from "../controllers/transactionControllers.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";


const router = express.Router();

//create new transaction
router.route("/transaction/add").post(isAuthenticatedUser, createNewTransaction);
//details of all transaction
router.route("/transaction/me").get(isAuthenticatedUser, getVisitiList);
//details of transaction
router.route("/transaction/:id").get(isAuthenticatedUser, getTransactionDetails);
//transaction details update
router.route("/transaction/update/:id").put(isAuthenticatedUser, updateTransactionDetails);
//transaction details delete
router.route("/transaction/:id").delete(isAuthenticatedUser, deleteTransaction);

export default router;