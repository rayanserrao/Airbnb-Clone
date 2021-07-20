import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Touchable } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={{flex:1}}>
            {/* search engine */}

            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>

            <Text style={styles.title}>Go Near</Text>

            <TouchableOpacity style={styles.button} onPress={console.warn("button pressd")}>
                <Text style={styles.buttontext}>Explore nearby places</Text>
            </TouchableOpacity>
            </ImageBackground>


        </View>
    )
}

const styles = StyleSheet.create({

    image: {


        width: '100%',
        height:500,

        resizeMode: 'cover',
        justifyContent: 'center',
        




    },
    title: {        
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        paddingLeft: 20

    },

    button:{
        marginLeft:20,
        backgroundColor:'white',
        width:200,
        borderRadius:10,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginTop:25
    },
    buttontext:{
        fontWeight:'bold',
        fontSize:16
    }
    



})

export default HomeScreen;