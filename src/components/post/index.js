import React from 'react';
import { Text,
View,
StyleSheet,
TouchableOpacity,
Image } from 'react-native';

const Post = (props) =>{
    

    const post = props.post;

    

    return (
        <View style={styles.container}>
         {/* image   */}
         <Image style={styles.image} source={{uri:post.image}} />

         <Text style={styles.bedroom}>{post.bed} bed {post.bedroom} Bedroom</Text>
         <Text style={styles.desc} numberOfLines={2}> {post.type}. {post.title}</Text>
         <Text style={styles.price}>
             <Text style={styles.oldprice}>${post.oldPrice} </Text>
            <Text style={styles.newprice}> ${post.newPrice}</Text>
            /night
         </Text>

         <Text style={styles.totalprice}>${post.totalPrice} total</Text>

         
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