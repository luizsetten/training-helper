import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import Menu from "./src/components/Menu";

import { useState } from "react";
import Router from "./src/components/Router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [selected, setSelected] = useState(1);

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <StatusBar style="auto" animated={true} />
        <Router selected={selected}></Router>
        <Menu selected={selected} setSelected={setSelected}></Menu>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
  },
});
