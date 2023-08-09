import { StyleSheet, Text, View } from "react-native";
import Timer from "../pages/Timer";

const Router = ({ selected }: { selected: number }) => {
  const renderComponent = (selection) => {
    if (selection === 0) return <Timer />;
    if (selection === 1) return <Text>Home</Text>;
    if (selection === 2) return <Text>Add</Text>;
  };

  return <View style={styles.container}>{renderComponent(selected)}</View>;
};

export default Router;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
