import {
  View,
  Text,
  SafeAreaView,
  PlatformData,
  StatusBar,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";

const Screen = ({ children }) => {
  return(
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop:Platform.OS === 'ios'?0:StatusBar.currentHeight,
    flex:1,
    backgroundColor:'black'
  }
});

export default Screen;
