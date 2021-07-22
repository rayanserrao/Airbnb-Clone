import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Pressable
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';






const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View>
            

            


            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>

            <Pressable style={styles.search} onPress={()=> navigation.navigate("Destination Search")}>
                <Fontisto name='search' size={25} color={"red"} />
                <Text style={styles.searchbuttontext}>Where are you going?</Text>
            </Pressable>
            

                <Text style={styles.title}>Go Near</Text>

                <Pressable style={styles.button} onPress={console.warn("button pressd")}>
                    <Text style={styles.buttontext}>Explore nearby places</Text>
                </Pressable>
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