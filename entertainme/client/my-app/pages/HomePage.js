import React from 'react'
import { Button, Text, View, StyleSheet} from 'react-native'

export default function HomePage({ navigation }){
    function goToMoviePage(){
        navigation.navigate("MoviePage")
    }

    function goToSeriesPage(){
        navigation.navigate("SeriesPage")
    }
    function goToFavoritePage(){
        navigation.navigate("FavoritePage")
    }
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.txt} onPress={goToMoviePage}>see movie list</Text>
            <Text style={styles.txt} onPress={goToSeriesPage}>see series list</Text>
            <Text style={styles.txt} onPress={goToFavoritePage}>my favorite movie</Text>
        </View>
            {/* <Button
            title="List Movies"
            color="#333"
            onPress={goToMoviePage}
            />
            <Button
            title="List Series"
            color="#333"
            onPress={goToSeriesPage}
            /> */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        paddingVertical: 8,
        fontSize: 20,
        fontWeight: 'bold'
    }
})