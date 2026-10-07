import { Linking, Platform, Alert } from "react-native";

export async function openMaps({ address, label, latitude, longitude }) {
  const hasCoordinates = latitude != null && longitude != null;

  // Needs is we will change the name of the restaurant
  // to something that has special characters like & or #, etc.
    const encodedAddress = encodeURIComponent(address);

    //Needs if something happens with the label 
    const encodedLabel = encodeURIComponent(label || address);

    // open Google Maps or link in browser if Google Maps is not available
    const googleMapsUrl = hasCoordinates
    ? `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
        : `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    
    try {
        if (Platform.OS === "ios") {

            // maps:// open only Apple Maps app 
            const appleMapsUrl = hasCoordinates
                ? `maps://?q=${encodedLabel}&ll=${latitude},${longitude}`
                : `maps://?q=${encodedAddress}`;
            
            try {
                await Linking.openURL(appleMapsUrl);
            } catch (error) {
                // If Apple Maps fails, try opening Google Maps in the browser
                await Linking.openURL(googleMapsUrl);
            }
        } else {
            // For Android 
            await Linking.openURL(googleMapsUrl);
        }
    } catch (error) {
        Alert.alert(
            "Error",
            "Unable to open maps. Please check your device settings and try again."
        );
    }
}