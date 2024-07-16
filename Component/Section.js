import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';


// định nghĩa section
const Section = ({ title, children, style }) => {
 return (
   <View style={[styles.container, style]}>
     {title && <Text style={styles.title}>{title}</Text>}
     <View style={styles.content}>
       {children}
     </View>
   </View>
 );
};


// giới hạn ràng buộc kiểu dữ liệu nếu cần thiết.
Section.propTypes = {
 title: PropTypes.string,
 children: PropTypes.node.isRequired,
 style: PropTypes.object,
};


const styles = StyleSheet.create({
 container: {
  flexDirection:'column',
        alignContent:'center',
   marginVertical: 10,
   padding: 15,
   backgroundColor: '#fff',
   borderRadius: 10,
   shadowColor: 'black',
   shadowOpacity: 10,
   shadowRadius: 50,
   elevation: 10,
 },
 title: {
   fontSize: 18,
   fontWeight: 'bold',
   marginBottom: 10,
   color:'red'
 },
 content: {
   marginTop: 10,
 },
});


// export default Section;
// import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, {useState} from 'react'
// import Banner from './Component/Banner';
// import Section from './Component/Section';
// import CustomHeader from './Component/CustomHeader';
// import Wrapper from './Component/Wrapper';
// import TextInputDemo from './Component/TextInputDemo';
// import { MyTheme, useTheme } from './Component/MyTheme';
// import Block from './Component/Block';
// Wrapper
// TextInputDemo
// MyTheme
// useTheme
// Block
// const App = () => {
//   //B2: return cấu trúc theme
//  return (
//      <View style={styles.container}>
//      <Section title="Sản phẩm mới" style={{ backgroundColor: '#ffcccc' }}>
//        <Text>Nội dung </Text>
//        <TextInput
//          placeholder="Nhập văn bản..."
//          style={styles.textInput}
//        />
//        <Button title="Nút 1" onPress={() => {}} />
//      </Section>
//      <Section title="Sản phẩm bán chạy" style={{ backgroundColor: '#ccffcc' }}>
//        <Text>Nội dung</Text>
//        <TextInput
//          placeholder="Nhập văn bản..."
//          style={styles.textInput}
//        />
//        <Button title="Nút 2" onPress={() => {}} />
//      </Section>
//    </View>

//  )
// }



    

// export default App


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//     flexDirection:'column',
//         alignContent:'center',
// },
// header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
// },
// input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     backgroundColor: '#fff',
// },
// buttonContainer: {
//     marginTop: 20,
// }, 
// khung:{
//   height: 100,
//   borderWidth: 1,
//   borderColor: 'red'
// }
// })
