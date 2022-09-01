import { View, Text, TextInput, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Screen from '../components/Screen'

import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import EMPTY from '../assets/images/R.png'


const { width, height } = Dimensions.get('screen')


export default function Episodes(props) {
  console.log(props.route.params)

  const [search, setSearch] = useState('');

  const [info, setInfo] = useState([]);
  const [detail, setDetail] = useState([]);

  const getEpisodes = () => {
    fetch(`https://api.tvmaze.com/seasons/${props.route.params.id}/episodes`)
      .then((resolve) => resolve.json())
      .then((detail) => setInfo(detail))
  }

  useEffect(() => {
    getEpisodes();
  }, [])


  if (info.length === 0) {
    return null;
  }

  return (
    <Screen >
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginBottom: 10, marginTop: 10 }}>
        <Ionicons name="chevron-back-outline" size={26} color="white" style={{ marginRight: 5 }} onPress={() => props.navigation.goBack()} />
        <Text style={styles.episodes}>Episodes</Text>
      </View>

      <ScrollView style={styles.episodes}>

        {
          info.map((item) => {
            return (
              <View key={item.id} style={styles.episodeContainer}>
                {
                  item.image ? <Image
                    source={{ uri: item.image.original }}
                    style={styles.image}
                  /> : <Image
                  source={EMPTY}
                  style={styles.image}
                />
                }

                <Text numberOfLines={1} style={styles.text}>{item.name}</Text>
                <AntDesign name="playcircleo" size={28} color="white" />

              </View>
            )
          })
        }
      </ScrollView>
    </Screen>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: '#222222',
    flex: 1,
    paddingVertical: 8,
    fontFamily: 'regular',
    fontSize: 22,
    color: 'white',
    paddingHorizontal: 10
  },
  image: {
    width: width / 3.5,
    height: height / 11,
  },
  episodes: {
    marginHorizontal: 10
  },
  episodeContainer: {
    marginHorizontal: 10,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#111111'
  },
  text: {
    fontFamily: 'regular',
    fontSize: 22,
    color: 'white',
    marginLeft: 10,
    flex: 1
  },
  episodes: {
    fontFamily: 'regular',
    fontSize:24,
    color:'white'
  }
})