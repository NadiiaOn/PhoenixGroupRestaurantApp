import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CuisineMenu from "./screens/CuisineMenu";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cuisine-Menu" component={CuisineMenu} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
