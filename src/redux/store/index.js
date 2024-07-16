// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../reducers/todoReducer";
// export default configureStore({
//     reducer:{
//         listTodo: todoReducer
//     }
// })


import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../reducers/expenseReducer";

export default configureStore({
    reducer: {
        expense: expenseReducer
    }
});
