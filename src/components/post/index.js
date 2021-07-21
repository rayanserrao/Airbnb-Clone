import React from 'react';
import { Text,
View,
StyleSheet,
TouchableOpacity,
Image } from 'react-native';

const Post = () =>{
    return (
        <View style={styles.container}>
         {/* image   */}
         <Image style={styles.image} source={require('../../../assets/images/wallpaper.jpg')} />

         <Text style={styles.bedroom}>1 bed 1 Bedroom</Text>
         <Text style={styles.desc} numberOfLines={1}>bedoroom with cozzy moood nad enjoyable for couples</Text>
         <Text style={styles.price}>
             <Text style={styles.oldprice}>$36 </Text>
            <Text style={styles.newprice}> $30</Text>
            /night
         </Text>

         <Text style={styles.totalprice}>$290 total</Text>

         
        </View>
    );
};

const styles = StyleSheet.create({

    container:{
        margin:20

    },
    image:{
        width:'100%',
        height:300,
        resizeMode:'cover',
        borderRadius:15
       
    
        
    },

    desc:{
        fontSize:18,
        lineHeight:26

    },
    bedroom:{
        marginVertical:10,
        color:'grey'

    },
    price:{
        fontSize:18,
        marginVertical:10

    },
    oldprice:{
        color:'grey',
        textDecorationLine:'line-through',
        marginRight:10

    },
    newprice:{
        fontWeight:'bold'

    },
    totalprice:{
        color:'grey',
        textDecorationLine:'underline'

    },




})

export default Post;