import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity, 
    FlatList
} from 'react-native';
import Post from '../../components/post';
import feed from '../../../assets/data/feed';

const SearchResultsScreen = () =>{
    return (
        <View>
            <FlatList
            data = {feed}
            renderItem={({item}) => <Post post={item} />}
            showsVerticalScrollIndicator={false}
           />
            
        </View>
    )
};

const styles = StyleSheet.create({
    
        
    }

)

export default SearchResultsScreen;