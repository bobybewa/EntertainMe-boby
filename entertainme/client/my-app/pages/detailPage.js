import React from 'react'
import { useState } from 'react'
import { Text, TouchableOpacity ,ScrollView, Image, StyleSheet, View, Modal, TextInput } from 'react-native'
import { favoriteMovies } from '../graphql/vars'
// Query and Mutation
import { GET_MOVIES_BY_ID, GET_MOVIES} from '../graphql/queries'
import { DELETE_MOVIE, EDIT_MOVIE } from '../graphql/mutations'
import { useQuery, useMutation } from '@apollo/client'
// hooks nav
import { useNavigation } from '@react-navigation/native'
export default function DetailPage({ route }){
    const navigation = useNavigation()
    const [show, setShow] = useState(false)
    const [valueInput, setValueInput] = useState({
        title: '',
        overview: ''
    })
    const { id } = route.params
    const [ deleteMovie, { result } ] = useMutation(DELETE_MOVIE, {
        onError: (error) => {
            console.log(error, 'ini err');
        },
        refetchQueries:{
            query: GET_MOVIES
        },
        onCompleted: () => {
            navigation.replace("MoviePage");
        }
    })
    const { loading, error, data  } = useQuery(GET_MOVIES_BY_ID, {
        variables: {
            inputId: id
        },
        onError: (error) => {
            console.log(error,"<<<<");
        },
        pollInterval: 500
    })
    const [ updateMovie, { resMovie }] = useMutation(EDIT_MOVIE,{
        onError: (error) => {
            console.log(error);
        },
        refetchQueries:{
            query: {
                GET_MOVIES
            }
        },
        onCompleted: () => {
            navigation.replace("MoviePage");
            setShow(false)
        }
    })
    function addFavorite(){
        const currentFav = favoriteMovies()
        const newDataFav = [data.movie, ...currentFav]
        favoriteMovies(newDataFav)
        // console.log(newDataFav,"<<<");
    }
    function removeMovie(){
        console.log(id, '<<<<');
        deleteMovie({
            variables: {
                _id: id
            }
        })
    }
    function showModal(){
        setShow(true)
    }
    function closeModal(){
        setShow(false)
    }
    function handleTitleOnChange(event){
        // console.log(event, 'event <<<');
        setValueInput({...valueInput, title: event})
    }
    function handleDescriptionOnChange(event){
        setValueInput({...valueInput, overview: event})
    }
    function sendNewData(){
        updateMovie({
            variables: {
                id : id,
                newMovie: valueInput
            }
        })
        
    }
    if(loading) return <Text>loading....</Text>
    if(error) return <Text>{error.message}</Text>
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.containerView}>
                    <Text>{JSON.stringify(data)} ini data</Text>
                    {/* <Image 
                    style={styles.imgPoster}
                    source={{
                        uri: data.movie.poster_path
                    }}/>
                    <Text style={styles.textMovie}>{data.movie.title}</Text>
                    <Text style={styles.textContent}>Description: {data.movie.overview}</Text>
                    <Text style={styles.textContent}>Rating: {data.movie.popularity} (12.3k)</Text>
                    <View style={styles.buttonBox}>
                        <TouchableOpacity style={styles.buttonOption} onPress={addFavorite}><Text>Add Favorite</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption} onPress={showModal}><Text>Edit Movie</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption} onPress={removeMovie}><Text>Delete Movie</Text></TouchableOpacity>
                    </View>
                    <Modal
                    transparent={true}
                    visible={show}
                    >
                        <View style={{
                            backgroundColor: '#000000aa',
                            flex: 1,
                        }}>
                            <View style={{backgroundColor: '#ffffff', margin: 50, padding: 40, borderRadius: 10,}}>
                                <Text>Title </Text>
                                <TextInput
                                value={valueInput}
                                onChangeText={handleTitleOnChange}
                                style={styles.input}
                                placeholder={data.movie.title}
                                ></TextInput>
                                <Text>Description</Text>
                                <TextInput
                                placeholder={data.movie.overview}
                                value={valueInput}
                                onChangeText={handleDescriptionOnChange}
                                style={styles.input}
                                ></TextInput>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <TouchableOpacity 
                                        style={styles.btnCloseModal}
                                        onPress={closeModal}>
                                            <Text style={styles.txtModal}>Cancel</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                        style={styles.btnCloseModal}
                                        onPress={sendNewData}>
                                            <Text style={styles.txtModal}>Update</Text>
                                        </TouchableOpacity>
                                    </View>
                            </View>
                        </View>
                    </Modal> */}
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    imgPoster:{
        width: 150,
        height: 220,
        borderRadius:15,
        left: '30%',
    },
    container: {
        paddingVertical: 10,
        flex: 1,
        backgroundColor: '#333',
    },
    textMovie : {
        color: 'white', 
        fontSize: 30,
        textAlign: 'center'
    },
    textContent: {
        color: 'white',
        paddingVertical: 10,
        left: 15,
        fontSize: 20
    },
    buttonBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonOption: {
        backgroundColor: 'white',
        marginVertical: 35,
        height: 60,
        padding: 20,
        borderRadius: 30
    },
    containerView: {
        top: 30,
        flex: 1,
    },
    input: {
        height: 45,
        margin: 12,
        borderWidth: 1,
        padding: 9
    },
    btnCloseModal: {
        backgroundColor: 'red',
        alignSelf: 'center',
        width: 100,
        height: 50,
        borderRadius: 20
    },
    txtModal :{
        marginVertical: 13,
        fontSize: 17,
        textAlign: 'center',
        color: 'white'
    }
})