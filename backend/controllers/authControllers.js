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
    /* const currentUserId = req.user._id; */
    const user = await User.findById(req?.user?._id);

    /* const userVisits = await Transition.find({ user: currentUserId }); */

    res.status(200).json({
        user: user,
        /* visits: userVisits, */
    });
});