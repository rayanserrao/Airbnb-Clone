import React, { useState } from 'react';

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    TextInput
} from 'react-native';
import Post from '../../components/post';
import feed from '../../../assets/data/feed';
import searchResults from '../../../assets/data/search'

import Entypo from 'react-native-vector-icons/Entypo';


const DestinationSearchScreen = () => {

    const [inputext, setInputtext] = useState('')
    return (
        <View style={styles.conatiner}>
            {/* textinput */}
            <TextInput style={styles.textinput}
                placeholder='Where are you going?'
                value={inputext}
                onChangeText={setInputtext} />




            {/* list of location */}

            <FlatList
                data={searchResults}
                renderItem={({ item }) =>
                    <View style={styles.row}>

                        <View style={styles.iconcontainer}>

                            <Entypo name={"location-pin"} size={25} />

                        </View>
                        <Text style={styles.locationtext}>{item.description}</Text>
                    </View>
                }
            />

        </View>
    )
};

const styles = StyleSheet.create({

    conatiner: {
        margin: 20
    },
    textinput: {
        fontSize: 20,
        marginBottom:20

    },
    row: {
        flexDirection:'row',
        
        
        alignItems:'center',
        paddingVertical:15,
        borderBottomWidth:1,
        borderColor:'lightgrey'

    },
    iconcontainer:{
        backgroundColor:'#d4d4d4',
        padding:7,
        borderRadius:10,
        marginRight:15


    },
    locationtext:{

    }

});

export default DestinationSearchScreen