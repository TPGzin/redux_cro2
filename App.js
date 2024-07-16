import React from 'react';
import { Provider } from 'react-redux';
store
import ExpenseScreen from './src/screens/ExpenseScreen';
import store from './src/redux/store';


const App = () => {
    return (
        <Provider store={store}>
            <ExpenseScreen />
        </Provider>
    );
};

export default App;
