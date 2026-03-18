import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomModalScreen from "../components/CustomModal";
import { NavigationContainer, TabActions } from "@react-navigation/native";
export default function App() {
  return (
   <SafeAreaProvider>
    <NavigationContainer>
      <TabActions.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarLabelSyle: {fontSize:13, fontWeight: 'bold'}, 
      }}></TabActions.Navigator>

    
    <CustomModalScreen animation="slide" themeColor="#2196F3"/>
    <CustomModalScreen animation="fade" themeColor="#4CAF50"/>
    <CustomModalScreen animation="none" themeColor="#FF9800"/>

    </NavigationContainer>
   </SafeAreaProvider>
  );
}

