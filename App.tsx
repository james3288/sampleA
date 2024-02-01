import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("hello");
  return (

      <View style={styles.container}>
        <Text>Hello World</Text>
        <Text>Hello World 2</Text>
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
