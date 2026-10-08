import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ProductCardMenuScreen from "./screens/ProductCardMenuScreen.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CuisineMenu from "./screens/CuisineMenu";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Rubik_500Medium, Rubik_700Bold } from "@expo-google-fonts/rubik";
import {
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { CartProvider } from "./context/CartContext";
import OrderScreen from "./screens/OrderScreen";

//Keep the splash screen visible until the fonts are loaded
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    "Rubik-Medium": Rubik_500Medium,
    "Rubik-Bold": Rubik_700Bold,
    "NunitoSans-Regular": NunitoSans_400Regular,
    "NunitoSans-SemiBold": NunitoSans_600SemiBold,
    "NunitoSans-Bold": NunitoSans_700Bold,
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{
            title: "",
            headShown: false,
          }}
        />
        <Stack.Screen
          name="ProductCardMenu"
          component={ProductCardMenuScreen}
          options={({ route }) => ({
            title: route.params.country,
            headerTitleStyle: { fontFamily: "Rubik-Bold" },
            headerTintColor: "#222",
          })}
        />
        <Stack.Screen name="CuisineMenu" component={CuisineMenu} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </CartProvider>
  );
}
