import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Transition from "../models/transaction.js";
import User from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js";
import sendToken from "../utils/sendToken.js";


//user staff
// Register user   =>  /api/register
export const registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name, email, password,
    })

    sendToken(user, 201, res)
});


// LogIn user =>  /api/login
export const loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    /* console.log("Received email:", email);
    console.log("Received password:", password); */

    if (!email || !password) {
        return next(new ErrorHandler("Please enter email & password", 400))
    }

    //fint user in dataBase
    const user = await User.findOne({ email }).select("+password")
    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401))
    }

    //check if password is correct
    const isPasswordMatched = await user.comparePassword(password)

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401))
    }

    sendToken(user, 200, res)

});

// LogOut user =>  /api/logout
export const logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({
        message: "Logged out",
    });
});


// Get current user profile  =>  /api/me

export const getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const currentUserId = req.user._id;
    const user = await User.findById(currentUserId);

    const userTransactionList = await Transition.find({ user: currentUserId });

    res.status(200).json({
        user: user,
        visitsLists: userTransactionList,
    });
});

// update password =>  /api/password/update

export const updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req?.user?._id).select("+password")
        ;
    //check the previous user password
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old password is incorrect", 400))
    }


    if (req.body.password.length < 6) {
        return next(new ErrorHandler("New password must be longer than 6 characters", 400));
    }

    user.password = req.body.password;
    await user.save();

    res.status(200).json({
        success: true,
    });
})