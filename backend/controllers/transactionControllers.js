import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Transition from "../models/transaction.js";

// ➕ create new transaction  /transaction/add

export const createNewTransaction = async (req, res, next) => {
    // Step 1: 
    const transition = await Transition.create(req.body);
    /* const { title, amount, type, category, description } = req.body;
    const userId = req.user.id;
    console.log("Adding to new transition:", { title, amount, type, category, description }); */


    // Step 2: create new Transition
    /* const createTransition = await Transition.create({
        user: userId,
        title, amount, type, category, description
    }); */


    // Step 3. 
    res.status(201).json({
        success: true,
        message: "Created new Transition successfully!",
        transition,
        /* createTransition, */
    });
}


// Get user's transaction - /transaction/me
export const getVisitiList = async (req, res, next) => {

    const userTransactionList = await Transition.find() // Now using the query object
        .sort({ date: -1 }); // Newest first

    res.status(200).json({
        success: true,
        count: userTransactionList.length,
        userTransactionList
    });
}