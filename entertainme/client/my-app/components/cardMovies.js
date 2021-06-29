import React,  {useRef} from 'react'
import Carousel from 'react-native-anchor-carousel'
import {Feather, MaterialIcons} from '@expo/vector-icons'
import { Text, Image, TouchableOpacity, StyleSheet, ScrollView, View, Dimensions, TextInput } from 'react-native'

// Query and Mutation
import { useMutation, useQuery } from '@apollo/client';
import { GET_MOVIES } from '../graphql/queries'
import { useNavigation } from '@react-navigation/native';
export default function Card(){
    const navigation = useNavigation()
    const {loading, error, data} = useQuery(GET_MOVIES,{
        pollInterval: 500
    })
    
    console.log(data, "<<<");
    const carouselRef = useRef(null)
    const { width, height } = Dimensions.get('window')
    const renderItem = ({ item, index }) => {
        return (
            <View key={index}>
                <TouchableOpacity
                onPress={e => goDetail(item._id)}
                >
                    <Image source={{uri: item.poster_path}} style={styles.carouselImage}></Image>
                    <Text style={styles.carouselText}>{item.title}</Text>
                    <MaterialIcons name="library-add" size={30} color='white' style={styles.carouselIcon}></MaterialIcons>
                </TouchableOpacity>
            </View>
        )
    }
    function goDetail(id){
        navigation.navigate("DetailPage", {id: id})
        // console.log(id, 'qweqwe');
    }
    if(loading) return <Text>loading...</Text>
    if(error) return <Text>{error.message}</Text>
    return(
        <ScrollView>
            <View style={styles.carouselContentContainer}>
                <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
                    <View style={styles.searchBoxContainer}>
                        <TextInput
                        placeholder="Search"
                        placeholderTextColor="#666"
                        style={styles.searcBox}
                        ></TextInput>
                        <Feather name="search" size={22} color="#666" style={styles.searcBoxIcon}></Feather>
                    </View>
                    <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginVertical: 5, marginLeft: 12}}>List Movies</Text>
                    <View style={styles.carouselContainerView}>
                        <Carousel style={styles.Carousel}
                        data={data.movies}
                        renderItem={renderItem}
                        itemWidth={200}
                        containerWidth={ width - 20}
                        separatorWidth={0}
                        ref={carouselRef}
                        inActiveOpacity={0.4}
                        >
                        </Carousel>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    carouselContentContainer: {
        flex: 1,
        backgroundColor: '#000',
        height: 720,
        paddingHorizontal: 14
    },
    searchBoxContainer: {
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        marginVertical: 40,
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    searcBox: {
        padding: 10,
        paddingLeft: 20,
        fontSize: 19
    },
    searcBoxIcon: {
        position: 'absolute',
        right: 20,
        top: 12
    },
    carouselText: {
        color: 'white'
    },
    carouselContainerView: {
        width: '100%',
        height: 380,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Carousel: {
        flex: 1,
        overflow: 'visible'
    },
    carouselImage: {
        width: 200,
        height: 320,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    carouselText: {
        padding: 14,
        color: 'white',
        position: 'absolute',
        bottom: 10,
        left: 2,
        fontWeight: 'bold'
    },
    carouselIcon: {
        position: 'absolute',
        top:15,
        right: 15
    }
}) 