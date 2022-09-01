import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import { FontAwesome5 } from '@expo/vector-icons';

import { DataContext } from "../hooks/DataProvider";
import Screen from "../components/Screen";
import MovieComponent from "../components/MovieComponent";

import { LinearGradient } from 'expo-linear-gradient';
import Navigation from "../navigation";

const { width, height } = Dimensions.get('screen');

const Home = ({navigation}) => {
  const value = React.useContext(DataContext);

  if (value === undefined) {
    return <Screen/>;
  }

  return (
    <Screen>
      <LinearGradient colors={['#000000', '#000000', '#000000']}>
        
        <FlatList
          data={value.data}
          numColumns={2}
          renderItem={({ item }) => <MovieComponent navigation={navigation} information={item} />}
          ListHeaderComponent={({ item }) => (
            <View>
              <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:10,marginBottom:10}}>
                <Text style={styles.logo}>N</Text>
                <FontAwesome5 name="search" size={26} color="white" onPress={()=>navigation.navigate('search')}/>
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate('details',{id:7,image:'https://static.tvmaze.com/uploads/images/original_untouched/230/575652.jpg'})}>
                <Image
                  source={{ uri: 'https://static.tvmaze.com/uploads/images/original_untouched/230/575652.jpg' }}
                  style={styles.topPoster}
                />
              </TouchableOpacity>
              <Text style={styles.movies}>POPULAR ON NETFLIX</Text>
            </View>
          )}
        />

      </LinearGradient>
    </Screen>

  );
};

const styles = StyleSheet.create({
  container: {

  },
  logo: {
    color: 'red',
    fontFamily: 'regular',
    fontSize: 45,
    marginBottom: 6,
    flex:1
  },
  topPoster: {
    flex:1,
    height: height / 1.5,
    opacity: 0.8,
    marginHorizontal:10
  },
  movies:{
    color: 'white',
    fontFamily: 'regular',
    marginHorizontal: 10,
    fontSize: 30,
    marginTop:20
  }
})

export default Home;
