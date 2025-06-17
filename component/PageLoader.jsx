import { View,  ActivityIndicator } from 'react-native'
import { COLORS } from "../constants/color.js"
import {styles} from "../assets/styles/home.styles.js"
import React from 'react'

const PageLoader = () => {
  return (
    <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary}></ActivityIndicator>
    </View>
  )
}

export default PageLoader;