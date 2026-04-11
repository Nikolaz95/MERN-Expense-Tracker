import express from "express"
import { createNewTransaction, getTransactionDetails, getVisitiList, updateTransactionDetails } from "../controllers/transactionControllers.js";


const router = express.Router();

router.route("/transaction/add").post(createNewTransaction);
router.route("/transaction/me").get(getVisitiList);

//details of transition
router.route("/transaction/:id").get(getTransactionDetails);

//transition details update
router.route("/transaction/update/:id").put(updateTransactionDetails);

export default router;