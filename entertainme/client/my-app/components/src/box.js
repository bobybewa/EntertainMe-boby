import React from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import { useQuery } from '@apollo/client';
import { GET_SERIES } from '../../graphql/queries'
export default function BoxComponent(){
    const {loading, error, data} = useQuery(GET_SERIES)
    // const { tvSeries } = data
    function test(){
        console.log('qweqwe');
    }
    if(loading) return <Text>loading...</Text>
    if(error) return <Text>{error.message}</Text>
    return(
        <View style={styles.container}>
            {
                data.tvSeries.map((data, index) => {
                    return (
                        <View key={index} style={styles.box}>
                            <View style={styles.inner}>
                                <ImageBackground 
                                style={styles.img}
                                source={{
                                    uri: data.poster_path
                                }}>
                                    <Text 
                                    style={styles.txt}
                                    onPress={test}>{data.title}</Text>
                                </ImageBackground>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
        padding: 5, 
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        width: '50%',
        height: '50%',
        padding: 5
    },
    inner: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        width: '100%',
        height: '100%',
    },
    txt:{
        fontSize: 20,
        padding: 5, 
        fontWeight: 'bold'
    }
})