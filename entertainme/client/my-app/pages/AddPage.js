import React from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useMutation } from '@apollo/client';
import { useState } from 'react'
import { ADD_MOVIES } from '../graphql/mutations'
import { GET_MOVIES } from '../graphql/queries'
import { useNavigation } from '@react-navigation/native'
export default function AddMovie(){
    const navigation = useNavigation()
    const [newMovie, { data, loading, error}] = useMutation(ADD_MOVIES, {
        refetchQueries:{
            query: GET_MOVIES
        },
        pollInterval: 500,
        onCompleted: () => {
            navigation.replace("MoviePage");
        }
    })
    const [movie, setMovie] = useState({
        title: "",
        overview: "",
        poster_path: "",
        popularity: "",
        tags: []
    })
    if(loading) return <Text>loading...</Text>
    if(error) return <Text>{error.message}</Text>
    function onPress(){
        newMovie({
            variables : {
                input : {
                    title: movie.title,
                    overview: movie.overview,
                    poster_path: movie.poster_path,
                    popularity: Number(movie.popularity),
                    tags: [movie.tags]
                }
            }
        })
    }
    return(
        <>
            <View
            style={styles.container}
            >
                <TextInput
                style={styles.input}
                onChangeText={(event) => setMovie({...movie, title: event})}
                placeholder="Title"
                />
                <TextInput
                style={styles.input}
                onChangeText={(event) => setMovie({...movie, overview: event})}
                placeholder="Overview"
                />
                <TextInput
                style={styles.input}
                onChangeText={(event) => setMovie({...movie, poster_path: event})}
                placeholder="Poster_path"
                />
                <TextInput
                style={styles.input}
                onChangeText={(event) => setMovie({...movie, popularity: event})}
                placeholder="Popularity"
                keyboardType="number-pad"
                maxLength={3}
                />
                <TextInput
                style={styles.input}
                onChangeText={(event) => setMovie({...movie, tags: event})}
                placeholder="Tags"
                />
                <TouchableOpacity
                style={styles.button}
                onPress={onPress}
                >
                    <Text style={styles.txt}>Create New Movie</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container :{
        alignItems: 'center',
        marginTop: '20%'
    },
    input: {
        height: 55,
        margin: 12,
        width: 200,
        borderWidth: 1,
        padding: 20,
        borderRadius: 4
    },
    button: {
        backgroundColor: 'aqua',
        width: '50%',
        height: 55,
        borderRadius: 20
    },
    txt: {
        textAlign: 'center',
        padding: 11,
        fontSize: 20,
        fontWeight: 'bold',
    }
})