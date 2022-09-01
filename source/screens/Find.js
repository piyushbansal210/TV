import { View, Text, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { Ionicons } from '@expo/vector-icons';

import { FontAwesome5 } from '@expo/vector-icons';
import Screen from "../components/Screen";
import { TextInput } from "react-native-gesture-handler";
import SearchComponent from "../components/SearchComponent";

import BACK from '../assets/images/Cartoon.jpg'

const { width, height } = Dimensions.get('screen');

const Find = ({navigation}) => {

  const [data, setData] = useState([]);

  const [find, setFind] = useState('');
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${find}`)
      .then((response) => response.json())
      .then((info) => setData(info))
  }, [find])


  return (
    <Screen>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginBottom: 10 ,marginTop:10}}>
          <Ionicons name="chevron-back-outline" size={26} color="white" style={{ marginRight: 5 }} onPress={()=>navigation.navigate('Home')}/>
          <TextInput
            style={styles.input}
            placeholder="Search ..."
            placeholderTextColor={"grey"}
            onChangeText={(e) => setFind(e)}
            value={find}
          />
        </View>
        <View style={{ flex:1,justifyContent: 'center',}}>


          {
            data.length === 0 ? <Image
              source={BACK}
              style={{
                height: height / 2,
                width: width / 2,
                alignSelf: 'center',
                resizeMode: 'contain',
                justifyContent: 'center'
              }}
            /> : <View>
              <FlatList
                data={data}
                renderItem={({ item }) => <SearchComponent navigation={navigation} information={item} />}
                keyExtractor={item => item.show.id}
              />
            </View>
          }
        </View>
      </View>
    </Screen>

  );
};

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
  }
})

export default Find;
