import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./source/screens/Home";

import Navigation from "./source/navigation/index.js";
import { useFonts } from 'expo-font';

import DataProvider from "./source/hooks/DataProvider";
import Find from "./source/screens/Find";

export default function App() {

  const [fontsLoaded] = useFonts({
    'regular': require('./source/assets/fonts/BebasNeue-Regular.ttf'),
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <DataProvider>
      <StatusBar backgroundColor="#000000" style={"light"}/>
      <Navigation/>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
