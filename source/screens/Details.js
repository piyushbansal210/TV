import { View, Text, Dimensions, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

import Screen from '../components/Screen'
import Navigation from '../navigation'

import { Ionicons } from '@expo/vector-icons';

import EMPTY from '../assets/images/R.png'


const { width, height } = Dimensions.get('screen')

const Details = (props) => {

  const [res, setRes] = useState({});
  const [cast, setCast] = useState([])
  const [season, setSeason] = useState([])

  const getInformation = () => {
    fetch(`https://api.tvmaze.com/shows/${props.route.params.id}`)
      .then((resolve) => resolve.json())
      .then((data) => setRes(data))
    fetch(`https://api.tvmaze.com/shows/${props.route.params.id}/cast`)
      .then((resolve) => resolve.json())
      .then((detail) => setCast(detail))

    fetch(`https://api.tvmaze.com/shows/${props.route.params.id}/seasons`)
      .then((resolve) => resolve.json())
      .then((detail) => setSeason(detail))

  }

  console.log(props.route.params)



  useEffect(() => {
    getInformation();
  }, [])

  if (Object.keys(res).length !== 0 && cast.length !== 0 && season.length !== 0 ) {
    console.log(res.image)
    const desc = res.summary.replace(/(<([^>]+)>)/ig, '')
    return (
      <Screen>
        <ScrollView>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginBottom: 10, marginTop: 10 }}>
            <Ionicons name="chevron-back-outline" size={26} color="white" style={{ marginRight: 5 }} onPress={() => props.navigation.goBack()} />
            <Text style={styles.episodes}>{res.name}</Text>
          </View>
          <Image
            source={{ uri: props.route.params.image }}
            style={styles.image}
          />
          <Text style={styles.text}>{res.name}</Text>
          <Text style={styles.sumary}>{desc}</Text>
          <Text style={[styles.text, { marginTop: 10, marginBottom: 6 }]}>CAST</Text>
          <ScrollView style={styles.castContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              cast.map((item, index) => {
                return (
                  <View key={index} style={{ marginRight: 10, flex: 1, width: height / 6, }}>
                    {
                      item.person.image ? <Image
                        source={{ uri: item.person.image.original }}
                        style={styles.castImage}
                      />:<Image
                      source={EMPTY}
                      style={styles.castImage}
                    />
                    }

                    <Text style={styles.castName}>{item.person.name}</Text>
                    <Text style={styles.characterName}>AKA: {item.character.name}</Text>
                  </View>
                )
              })
            }

          </ScrollView>

          <Text style={[styles.text, { marginTop: 10, marginBottom: 6 }]}>SEASONS</Text>
          <ScrollView style={styles.castContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              season.map((item, index) => {
                return (
                  <TouchableOpacity key={index} style={{ marginRight: 10, flex: 1, width: height / 6, }}
                    onPress={() => props.navigation.navigate('episodes', { id: item.id })}
                  >
                    {
                      item.image ? <Image
                        source={{ uri: item.image.original }}
                        style={styles.castImage}
                      />:<Image
                      source={EMPTY}
                      style={styles.castImage}
                    />
                    }
                    <Text style={styles.castName}>SEASON {item.number}</Text>
                    <Text style={styles.characterName}>{item.episodeOrder} Episodes</Text>
                  </TouchableOpacity>
                )
              })
            }

          </ScrollView>
          <View style={{ height: 20 }} />
        </ScrollView>

      </Screen>
    )
  }
  else {
    return null;
  }


}

const styles = StyleSheet.create({
  container: {

  },
  image: {
    height: height / 1.5,
    margin: 10
  },
  text: {
    fontFamily: 'regular',
    fontSize: 40,
    marginHorizontal: 10,
    color: 'white'
  },
  sumary: {
    fontFamily: 'regular',
    fontSize: 20,
    marginHorizontal: 10,
    color: 'grey',
    marginTop: 5
  },
  castImage: {
    height: height / 6,
    aspectRatio: 1
  },
  castContainer: {
    marginHorizontal: 10,
  },
  castName: {
    fontFamily: 'regular',
    color: 'white',
    fontSize: 22,
    width: '100%',
    marginTop: 3
  },
  characterName: {
    flex: 1,
    fontFamily: 'regular',
    color: 'grey',
    fontSize: 15,
    marginTop: 3
  },
  episodes: {
    fontFamily: 'regular',
    fontSize: 26,
    color: 'white'
  }
})

export default Details