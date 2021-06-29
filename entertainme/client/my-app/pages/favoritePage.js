import React from 'react'
import { favoriteMovies } from '../graphql/vars'
import { useReactiveVar } from '@apollo/client'
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
export default function FavoritePage(){
    const favorites = useReactiveVar(favoriteMovies)
    console.log(favorites, 'favorites');
    function deleteFav(id){
        // console.log(id, '<<<<');
        const data = favorites.filter(el => el._id !== id)
        favoriteMovies(data)
        
    }
    return(
        <>
            {/* <Text>{JSON.stringify(favorites)}</Text> */}
            <View style={styles.Container}>
                {
                    favorites.map((favorite, index) =>{
                        return (
                            <ScrollView key={index}>
                                <Image
                                style={styles.img}
                                source={{
                                    uri: favorite.poster_path
                                }}
                                ></Image>
                                <Text 
                                onPress={e => deleteFav(favorite._id)}
                                style={styles.txt}>Delete</Text>
                            </ScrollView>
                        )
                    })
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 150,
        // alignSelf: 'center'
        left: 20,
        borderRadius: 13
    },
    Container: {
        paddingTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    txt: {
        // textAlign: 'center',
        left: 25,
        paddingVertical: 5,
        fontWeight: 'bold',
        fontSize: 19
    }
})