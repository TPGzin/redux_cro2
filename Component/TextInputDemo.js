import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'


const TextInputDemo = (props) => {
 return (
   <View>
       <Text>{props.label}</Text>
      <TextInput {...props} 
       style = {[props.style, st.input]}
       placeholderTextColor={props.placeholderTextColor || '#000fff'}
      />
  </View>
 )
}
export default TextInputDemo
const st = StyleSheet.create({
   input:{
       padding:10,
       borderWidth: 1,
       borderColor: 'blue'
   }
})
