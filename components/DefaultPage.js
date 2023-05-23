import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

const DefaultPage = ({ children }) => (
    <View style={{flex:1,paddingVertical:10, paddingHorizontal:20}}>
        {children}
    </View>
)

export default DefaultPage