import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Block = ({ title, children }) => {
    return (
        <View style={styles.block}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.content}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        padding: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    title: {
        color: '#007BFF', // Màu sắc thương hiệu
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        padding: 10,
    },
});

export default Block;