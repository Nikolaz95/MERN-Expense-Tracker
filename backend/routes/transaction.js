import express from "express"
import { createNewTransaction } from "../controllers/transactionControllers.js";


const router = express.Router();

router.route("/transaction/add").post(createNewTransaction);



export default router;