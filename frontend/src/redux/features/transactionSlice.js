import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    transactions: [],
    loading: false,
    error: "",
};


export const transactionSlice = createSlice({
    initialState,
    name: "transaction",
    reducers: {
        /* create new transaction */
        addTransaction(state, action) {
            state.transactions.push(action.payload);
        },

        /* delete transaction */
        deleteTransaction(state, action) {
            state.transactions = state.transactions.filter(
                (item) => item._id !== action.payload
            );
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
    }
});


export default transactionSlice.reducer;

export const { addTransaction, deleteTransaction } = transactionSlice.actions;