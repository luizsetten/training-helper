import { StyleSheet, Text, View } from "react-native";
import Timer from "../pages/Timer";
import Home from "../pages/Home";
import AnimatedStyleUpdateExample from "../pages/AnimatedStyle";

const Router = ({ selected }: { selected: number }) => {
  const renderComponent = (selection) => {
    if (selection === 0) return <Timer />;
    if (selection === 1) return <Home />;
    if (selection === 2) return <AnimatedStyleUpdateExample />;
  };

  return <View style={styles.container}>{renderComponent(selected)}</View>;
};

export default Router;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
