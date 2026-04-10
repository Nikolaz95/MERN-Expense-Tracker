import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a title (e.g. Bonus, Rent...)"],
            trim: true
        },
        amount: {
            type: Number,
            required: [true, "Please enter the amount."],
        },
        type: {
            type: String,
            required: [true, "Type must be 'income' or 'expense''"],
            enum: {
                values: ["income", "expense"],
                message: "{VALUE} transaction type not supported"
            }
        },
        category: {
            type: String,
            required: [true, "Please select a category."],
            // Ovdje stavljamo sve moguće 'value' vrijednosti iz tvog transactionCategories niza
            enum: [
                "housing", "utilities", "telecom", "insurance", "groceries",
                "dining", "transport", "shopping", "health", "streaming",
                "music", "softclo", "travel", "hobbies", "nightlife",
                "debt", "savings", "fees", "salary", "gambling", "cryptocurrency"
            ]
        },
        date: {
            type: Date,
            default: Date.now
        },
        description: {
            type: String,
            required: [false],
            maxLength: [200, "The description cannot be longer than 200 characters."]
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false
        }
    },
    { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);