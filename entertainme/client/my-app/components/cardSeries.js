import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import HeaderComponent from './src/header'
import BoxComponent from './src/box'
export default function CardSeries(){
    return(
        <>
            <View style={styles.container}>
                <HeaderComponent></HeaderComponent>
                <BoxComponent></BoxComponent>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})