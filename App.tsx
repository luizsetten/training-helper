import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Menu from "./src/components/Menu";

import { useState } from "react";
import Router from "./src/components/Router";

export default function App() {
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" animated={true} />
      <Router selected={selected}></Router>
      {/* <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text> */}
      <Menu selected={selected} setSelected={setSelected}></Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    marginTop: 50,
  },
});
