import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen')
import { FontAwesome } from '@expo/vector-icons';

const MovieComponent = (props) => {


        if (props.information === undefined) {
                return null;
        }

        return (
                <TouchableOpacity style={styles.container} onPress={()=>props.navigation.navigate('details',{id:props.information.id,image:props.information.image.original})}>

                        <ImageBackground source={{ uri: props.information.image.original }} style={styles.backGround} imageStyle={styles.image}>

                        </ImageBackground>
                        <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:5 ,marginHorizontal:1}}>
                                <Text numberOfLines={1} style={styles.textStyle}>{props.information.name}</Text>
                                <Text style={styles.rating}>{props.information.rating.average}</Text>
                                <FontAwesome name="star" size={20} color="gold" />
                        </View>
                </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                margin: 10,
        },
        backGround: {
                flex: 1,
                height: height / 3.5,

        },
        image: {
                flex: 1,
                opacity: 0.8
        },
        textStyle: {
                fontFamily: 'regular',
                color: 'white',
                marginTop: 4,
                fontSize: 18,
                flex:1
        },
        rating: {
                fontFamily: 'regular',
                color: 'white',
                marginTop: 4,
                fontSize: 18,
                marginRight:2
        }
})

export default MovieComponent;