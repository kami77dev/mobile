import React from "react";
import { AppRegistry, View, Text, StyleSheet} from "react-native";
import OlaMundo from "./components/OlaMundo";

export default function App(){
  return (
    <View style={styles.container}>
    <OlaMundo/>
    </View>
  );

}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#4de7ec',
  },

  text:{
    fontZise:24,
    fontWeight:'bold',
  },

});
