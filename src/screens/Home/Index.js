import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';






const HomeScreen = () => {
    return (
        <View>
            

            


            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>

            <TouchableOpacity style={styles.search} onPress={console.warn("search button pressd")}>
                <Fontisto name='search' size={25} color={"red"} />
                <Text style={styles.searchbuttontext}>Where are you going?</Text>
            </TouchableOpacity>
            

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
        height: 500,

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

    button: {
        marginLeft: 20,
        backgroundColor: 'white',
        width: 200,
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    buttontext: {
        fontWeight: 'bold',
        fontSize: 16
    },
    search: {

        marginLeft: 20,
        marginRight:20,
        backgroundColor: 'white',
        
        borderRadius: 30,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:90,
        flexDirection:'row'
        
        

        
       



    },

    searchbuttontext: {
        fontSize:16,
        paddingLeft:10

    }




})

export default HomeScreen;