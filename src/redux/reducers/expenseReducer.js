import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    transactions: [] // chứa danh sách giao dịch
};

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addTransaction(state, action) {
            state.transactions.push(action.payload);
        },
        deleteTransaction(state, action) {
            state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
        },
        updateTransaction(state, action) {
            const { id, title, description, date, type, amount } = action.payload;
            const transaction = state.transactions.find(t => t.id === id);
            if (transaction) {
                transaction.title = title;
                transaction.description = description;
                transaction.date = date;
                transaction.type = type;
                transaction.amount = amount;
            }
        },
        searchTransaction(state, action) {
            return state.transactions.filter(transaction => transaction.title.includes(action.payload));
        }
    }
});

export const { addTransaction, deleteTransaction, updateTransaction } = expenseSlice.actions;
export default expenseSlice.reducer;
