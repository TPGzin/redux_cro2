import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Alert, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction, deleteTransaction, updateTransaction } from '../redux/reducers/expenseReducer';
import st from '../../Component/Banner/style';

const ExpenseScreen = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('income'); // Giá trị mặc định là 'income'
    const [amount, setAmount] = useState('');
    const [editId, setEditId] = useState(null);

    const dispatch = useDispatch();
    const transactions = useSelector(state => state.expense.transactions);

    const handleAdd = () => {
        if (title && amount) {
            const newTransaction = { id: Math.random().toString(), title, description, date, type, amount: parseFloat(amount) };
            dispatch(addTransaction(newTransaction));
            resetFields();
        }
    };

    const handleEdit = (transaction) => {
        setTitle(transaction.title);
        setDescription(transaction.description);
        setDate(transaction.date);
        setType(transaction.type);
        setAmount(transaction.amount.toString());
        setEditId(transaction.id);
    };

    const handleUpdate = () => {
        if (editId) {
            dispatch(updateTransaction({ id: editId, title, description, date, type, amount: parseFloat(amount) }));
            resetFields();
        }
    };

    const resetFields = () => {
        setTitle('');
        setDescription('');
        setDate('');
        setType('income');
        setAmount('');
        setEditId(null);
    };

    const handleTypeSelect = (selectedType) => {
        setType(selectedType);
    };

    const showTypeDialog = () => {
        Alert.alert(
            "Chọn loại giao dịch",
            "",
            [
                { text: "Đóng", style: "cancel" },
                { text: "Thu nhập", onPress: () => handleTypeSelect('income') },
                { text: "Chi tiêu", onPress: () => handleTypeSelect('expense') },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Tiêu đề" value={title} onChangeText={setTitle} style={styles.input} />
            <TextInput placeholder="Mô tả" value={description} onChangeText={setDescription} style={styles.input} />
            <TextInput placeholder="Ngày" value={date} onChangeText={setDate} style={styles.input} />
            
          

            <TextInput placeholder="Số tiền" value={amount} onChangeText={setAmount} keyboardType="numeric" style={styles.input} />
            <TouchableOpacity onPress={showTypeDialog} style={styles.typeButton}>
                <Text style={styles.typeButtonText}>{type === 'income' ? 'Thu nhập' : 'Chi tiêu'}</Text>
            </TouchableOpacity>
            <Button title={editId ? "Cập nhật" : "Thêm"} onPress={editId ? handleUpdate : handleAdd} color="red" />
            <FlatList
                style={[{marginTop:5}]}
                data={transactions}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.transactionItem}>
                        <Text style={styles.transactionText}>{item.title} - {item.amount} ({item.type})</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Sửa" onPress={() => handleEdit(item)} color="red" />
                            <Button title="Xóa" onPress={() => dispatch(deleteTransaction(item.id))} color="red" />
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
    },
    input: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    typeButton: {
        padding: 15,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
        backgroundColor: 'red',
    },
    typeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    transactionItem: {
        padding: 10,
        borderColor: '#FF69B4',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    transactionText: {
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default ExpenseScreen;
