import express from "express"
import { createNewTransaction, getTransactionDetails, getVisitiList } from "../controllers/transactionControllers.js";


const router = express.Router();

router.route("/transaction/add").post(createNewTransaction);
router.route("/transaction/me").get(getVisitiList);

//details of transition
router.route("/transaction/:id").get(getTransactionDetails);



export default router;