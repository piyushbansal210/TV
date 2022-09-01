import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen')

const SearchComponent = (props) => {

  console.log(props.navigation)
  return (
    <TouchableOpacity style={styles.container} onPress={()=>props.navigation.navigate('details',{id:props.information.show.id, image:props.information.show.image.original})}>
      <Image
        source={{ uri: props.information.show.image ? props.information.show.image.original || props.information.show.image.regular : null }}
        style={styles.image}
      />
      <Text numberOfLines={1} style={styles.text}>{props.information.show.name}</Text>
      <AntDesign name="playcircleo" size={28} color="white" />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#111111'
  },
  image: {
    width: width / 3.5,
    height: height / 11,
  },
  text: {
    fontFamily: 'regular',
    fontSize: 22,
    color: 'white',
    marginLeft: 20,
    flex: 1
  },
  logo: {},
})

export default SearchComponent