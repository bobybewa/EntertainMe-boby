import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
export default function HeaderComponent(){
    return(
        <View style={styles.header}>
            <Text style={styles.txt}>Available</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee'
    },
    txt: {
        fontSize:20,
        fontWeight: 'bold'
    }
})