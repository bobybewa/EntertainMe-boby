import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Card from '../components/cardMovies'
export default function MoviePage({ navigation }){
    function addMovie(){
        navigation.navigate("AddPage")
    }
    return (
        <>
            <Card></Card>
            <View style={styles.container}>
                <Text style={styles.txt} onPress={addMovie}>Add Movie</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    txt: {
        color: 'white',
        fontSize: 20,
        backgroundColor: '#333',
        width: 130,
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        bottom: 30,
        textAlign: 'center',
        padding: 10
    },
    container: {
        alignItems: 'center',
        backgroundColor: 'black'
    }
})