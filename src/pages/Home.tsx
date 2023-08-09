import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Exercise {
  name: string;
  series: number;
  reps: number;
  done?: number;
}

const Home = () => {
  const [exerciseList, setExerciseList] = useState<Exercise[]>([
    { name: "Supino reto", reps: 10, series: 4 },
  ]);

  const countSerie = (exercisePosition: number) => {
    const updatedList = exerciseList.map((i, index) => {
      if (index === exercisePosition)
        return {
          ...i,
          done: i.done === i.series ? i.done : i.done ? i.done + 1 : 1,
        };

      return i;
    });

    setExerciseList(updatedList);
  };

  return (
    <View style={styles.container}>
      {exerciseList.map((item, index) => (
        <TouchableOpacity
          key={item.name}
          onPress={() => countSerie(index)}
          style={styles.containerExercise}
        >
          <Text>
            {item.name} | {item.reps}reps | {item.series}series | {item.done}
            done
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  containerExercise: {
    backgroundColor: "#e2e2e2",
    padding: 16,
    borderRadius: 4,
  },
});
