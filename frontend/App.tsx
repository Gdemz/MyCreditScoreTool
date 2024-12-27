import { StatusBar } from "expo-status-bar"; // Import StatusBar from Expo
import { StyleSheet, View } from "react-native"; // Import React Native components
import HomeScreen from "./screens/HomeScreen"; // Import the HomeScreen component
import CustomButton from "./components/CustomButton"; // Import the CustomButton component

export default function App() {
  return (
    <View style={styles.container}>
      {/* Render the HomeScreen */}
      <HomeScreen />

      {/* Render the CustomButton */}
      <CustomButton
        title="Click Me"
        onPress={() => alert("Button Pressed!")}
      />

      <StatusBar style="auto" />
    </View>
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
