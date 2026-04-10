import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import newTransition from "../models/transaction.js";

// ➕ create new transaction  /transaction/add

export const createNewTransaction = async (req, res, next) => {
    // Step 1: 
    const transition = await newTransition.create(req.body);
    /* const { title, amount, type, category, description } = req.body;
    const userId = req.user.id;
    console.log("Adding to new transition:", { title, amount, type, category, description }); */


    // Step 2: create new Transition
    /* const createTransition = await newTransition.create({
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