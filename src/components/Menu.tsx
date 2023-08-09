import { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Menu = ({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: (i: number) => void;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={selected === 0 ? styles.ballSelected : styles.ball}
        onPress={() => setSelected(0)}
      >
        <MaterialIcons
          name="timer"
          size={32}
          color={selected === 0 ? "black" : "white"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={selected === 1 ? styles.ballSelected : styles.ball}
        onPress={() => setSelected(1)}
      >
        <MaterialIcons
          name="home"
          size={32}
          color={selected === 1 ? "black" : "white"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={selected === 2 ? styles.ballSelected : styles.ball}
        onPress={() => setSelected(2)}
      >
        <MaterialIcons
          name="add"
          size={32}
          color={selected === 2 ? "black" : "white"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: "100%",
    backgroundColor: "#c74141",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  ballSelected: {
    height: 48,
    width: 96,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  ball: {
    height: 48,
    width: 96,
    backgroundColor: "#c74141",
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});
