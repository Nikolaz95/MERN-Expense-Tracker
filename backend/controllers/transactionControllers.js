import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Transition from "../models/transaction.js";
import ErrorHandler from "../utils/errorHandler.js";

// ➕ create new transaction  /transaction/add

export const createNewTransaction = catchAsyncErrors(async (req, res, next) => {
    // Step 1: 

    const { title, amount, type, category, description } = req.body;
    const userId = req.user.id;
    console.log("Adding to new transition:", { title, amount, type, category, description });


    // Step 2: create new Transition
    const createTransition = await Transition.create({
        user: userId,
        title,
        amount,
        type,
        category,
        description
    });


    // Step 3. 
    res.status(201).json({
        success: true,
        message: "Created new Transition successfully!",
        /* transition, */
        createTransition,
    });
})


// Get user's transaction - /transaction/me
export const getTransactionList = catchAsyncErrors(async (req, res, next) => {
    const userId = req.user._id;

    // Base query - now actually used in the find()
    const query = { user: userId };

    const userTransactionList = await Transition.find(query) // Now using the query object
        .sort({ date: -1 }); // Newest first

    res.status(200).json({
        success: true,
        count: userTransactionList.length,
        userTransactionList
    });
})


//  get single transaction  /transaction/:id

export const getTransactionDetails = catchAsyncErrors(async (req, res, next) => {
    // Step 1: 
    const transitionDetails = await Transition.findById(req?.params?.id);

    if (!transitionDetails) {
        return next(new ErrorHandler("Transition Details not found ! or unauthorized to delete", 404));
    }
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
        message: "Transition Details successfully found!",
        transitionDetails,
        /* createTransition, */
    });
});


// 📝 Update transaction notes /transaction/update/:id

export const updateTransactionDetails = catchAsyncErrors(async (req, res, next) => {
    // Step 1: 
    let transitionDetailsUpdate = await Transition.findById(req?.params?.id);

    if (!transitionDetailsUpdate) {
        return res.status(404).json({
            error: "Transition Details not found !"
        })
    }

    transitionDetailsUpdate = await Transition.findByIdAndUpdate(
        req?.params?.id,
        req.body,
        {
            new: true,
            runValidators: true // Ovo osigurava da update poštuje pravila iz Sheme
        }
    );

    // Step 3. 
    res.status(201).json({
        success: true,
        message: "Transition Details successfully update!",
        transitionDetailsUpdate,
        /* createTransition, */
    });
})

// ❌ Delete transaction notes /transaction/:id

export const deleteTransaction = catchAsyncErrors(async (req, res, next) => {
    // Step 1: 
    const deleteTransition = await Transition.findById(req?.params?.id);

    if (!deleteTransition) {
        return res.status(404).json({
            error: "Transition not found !"
        })
    }

    await deleteTransition.deleteOne();

    // Step 3. 
    res.status(201).json({
        success: true,
        message: "Transition  successfully delete !",
        deleteTransition,
        /* createTransition, */
    });
})