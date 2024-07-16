import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Banner from './Component/Banner';
import Section from './Component/Section';
import CustomHeader from './Component/CustomHeader';

const App = () => {
 
  return (
    <View>
      <Banner uri_img= "https://i.imgur.com/rWSUcdc.jpeg" title="ảnh số 1"/>
      <Banner uri_img= 'https://i.imgur.com/m1cwuPa.jpeg' title="ảnh số 2"/>
      
     <CustomHeader title="My Title" onBackPress={() => console.log('Back clicked!')}/>
     <CustomHeader title="My Title" onBackPress={() => console.log('Back clicked!')} />
     <CustomHeader title="My Title" onBackPress={() => console.log('Back clicked!')} />
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})