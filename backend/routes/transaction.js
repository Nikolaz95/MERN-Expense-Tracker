import express from "express"
import { createNewTransaction, getVisitiList } from "../controllers/transactionControllers.js";


const router = express.Router();

router.route("/transaction/add").post(createNewTransaction);
router.route("/transaction/me").get(getVisitiList);



export default router;