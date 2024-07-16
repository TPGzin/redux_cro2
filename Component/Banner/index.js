import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import st from './style'



const index = ({uri_img, title}) => {
  return (
    <View style={st.khung}>
      <Image source={{uri_img}}style={st.img} />
      <Text style={st.title}>{title}</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})