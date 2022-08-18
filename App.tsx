import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const mod = require.context("./app");

export default function App() {
  console.log("app context:", mod.keys());
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>Files in `app/`</Text>
      <View>
        {mod.keys().map((key) => (
          <Text key={key}>{key}</Text>
        ))}
      </View>
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
