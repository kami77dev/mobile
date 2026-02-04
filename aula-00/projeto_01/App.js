import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <Text> Hello World 👋 🌍!</Text>
      <Image source={require('./img/flor2.png')} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ef0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
