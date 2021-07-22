import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const GuestScreen = () => {

    const [adults, setadults] = useState(4)
    const [children, setChildren] = useState(3)
    const [infants, setInfants] = useState(0)

    const navigation = useNavigation();
    return (
        <View style={{justifyContent:'space-between', height:'100%'}}>
        <View>
            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={{ fontWeight: 'bold' }}>Adults</Text>
                    <Text style={{ color: 'grey' }}>Age 18 or above</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* -
                    value
                    + Button */}
                    <Pressable
                        onPress={() => setadults(Math.max(0, adults - 1))}
                        style={styles.button} >
                        <Text style={{ fontSize: 20, color: 'grey' }}>-</Text>
                    </Pressable>

                    <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>



                    <Pressable
                        onPress={() => setadults(adults + 1)}
                        style={styles.button} >
                        <Text style={{ fontSize: 20, color: 'grey' }}>+</Text>
                    </Pressable>


                </View>

            </View>


            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={{ fontWeight: 'bold' }}>Children</Text>
                    <Text style={{ color: 'grey' }}>Age 3 to 17</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* -
                    value
                    + Button */}
                    <Pressable
                        onPress={() => setChildren(Math.max(0, children - 1))}
                        style={styles.button} >
                        <Text style={{ fontSize: 20, color: 'grey' }}>-</Text>
                    </Pressable>

                    <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{children}</Text>



                    <Pressable
                        onPress={() => setChildren(children + 1)}
                        style={styles.button} >
                        <Text style={{ fontSize: 20, color: 'grey' }}>+</Text>
                    </Pressable>


                </View>

            </View>


            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={{ fontWeight: 'bold' }}>Infants</Text>
                    <Text style={{ color: 'grey' }}>Bellow age 3</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* -
                    value
                    + Button */}
                    <Pressable
                        onPress={() => setInfants(Math.max(0, infants - 1))}
                        style={styles.button} >
                        <Text style={{ fontSize: 20, color: 'grey' }}>-</Text>
                    </Pressable>

                    <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{infants}</Text>



                    <Pressable
                        onPress={() => setInfants(infants + 1)}
                        style={styles.button} >
                        <Text style={{ fontSize: 20, color: 'grey' }}>+</Text>
                    </Pressable>


                </View>

            </View>
        </View>

        <View>
            <Pressable onPress={() =>navigation.navigate('Search Results')} style={{marginBottom:20, backgroundColor:'black',
            alignItems:'center', height:50, justifyContent:'center', marginHorizontal:50, borderRadius:10
        }}>
                <Text style={{color:'white', fontSize:20}}>Search</Text>

                </Pressable>
        </View>

        </View>
       
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',


    }

});

export default GuestScreen