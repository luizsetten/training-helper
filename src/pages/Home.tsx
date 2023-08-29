import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
interface Exercise {
  name: string;
  series?: number;
  reps: string[] | number[];
  done?: number;
}

interface ExerciseGroup {
  name: string;
  exerciseList: Exercise[];
  selected?: boolean;
}

const Home = () => {
  const [exerciseGroupList, setExerciseGroupList] = useState<ExerciseGroup[]>([
    {
      name: "Peito",
      selected: true,
      exerciseList: [
        {
          name: "AQC Cricifixo maq",
          reps: [10],
          series: 10,
          done: 0,
        },
        { name: "Supino reto", reps: [15, 12, 10, 8], series: 4, done: 0 },
        { name: "Supino inclinado", reps: [15, 12, 10, 8], series: 4, done: 0 },
        { name: "Crucifixo Arnold", reps: [12], series: 3, done: 0 },
        { name: "Crucifixo Arnol", reps: [12], series: 3, done: 0 },
      ],
    },
    { name: "Peito", exerciseList: [] },
    { name: "Peito", exerciseList: [] },
  ]);

  const selectedExerciseGroup = exerciseGroupList.find((i) => i.selected);

  const handleSetExerciseGroup = (indexSelected: number) => {
    setExerciseGroupList((groups) =>
      groups.map((group, index) => ({
        ...group,
        selected: indexSelected === index,
      }))
    );
  };

  const countSerie = (exercisePosition: number) => {
    const indexFound = exerciseGroupList.findIndex((i) => i.selected);

    const updatedGroup = selectedExerciseGroup.exerciseList.map((i, index) => {
      if (index === exercisePosition)
        return {
          ...i,
          done:
            i.done === (i.series ?? i.reps.length)
              ? i.done
              : i.done
              ? i.done + 1
              : 1,
        };

      return i;
    });

    setExerciseGroupList((groups) =>
      groups.map((group, index) =>
        index === indexFound ? { ...group, exerciseList: updatedGroup } : group
      )
    );
  };

  const resetSerie = (exercisePosition: number) => {
    const updatedGroup = selectedExerciseGroup.exerciseList.map((i, index) => {
      if (index === exercisePosition)
        return {
          ...i,
          done: 0,
        };

      return i;
    });

    const indexFound = exerciseGroupList.findIndex((i) => i.selected);

    setExerciseGroupList((groups) =>
      groups.map((group, index) =>
        index === indexFound ? { ...group, exerciseList: updatedGroup } : group
      )
    );
  };

  const getStyleRep = (exercise: Exercise, indexRep: number) => {
    const defaultStyle = {
      ...styles.textDescription,
      marginHorizontal: 4,
      padding: 2,
      borderRadius: 4,
    };

    if (
      exercise.reps.length === 1 &&
      exercise.done !== (exercise.series ?? exercise.reps.length)
    )
      return { ...defaultStyle, backgroundColor: "#51bee8", color: "#F3f3f3" };

    return {
      ...defaultStyle,
      backgroundColor: exercise.done === indexRep ? "#51bee8" : "transparent",
      color: exercise.done === indexRep ? "#F3f3f3" : "black",
    };
  };

  const getStyleGroup = (selected: boolean) => {
    return {
      backgroundColor: selected ? "#51bee8" : "#abbedc33",
      color: selected ? "#F3f3f3" : "#505050",
      borderRadius: 4,
      padding: 8,
    };
  };

  const getStyleGroupText = (selected: boolean) => {
    return {
      color: selected ? "#F3f3f3" : "#505050",
    };
  };

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {exerciseGroupList.map((item, index) => (
          <TouchableOpacity
            key={item.name + index}
            style={getStyleGroup(item.selected)}
            onPress={() => handleSetExerciseGroup(index)}
          >
            <Text style={getStyleGroupText(item.selected)}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedExerciseGroup?.exerciseList.map((item, index) => (
        <TouchableOpacity
          key={item.name}
          style={styles.containerExercise}
          onPress={() => countSerie(index)}
        >
          <View
            style={{
              opacity:
                item.done === (item.series ?? item.reps.length) ? 0.2 : 1,
            }}
          >
            <Text style={styles.textDescription}>{item.name}</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              {item.reps.map((rep, index) => (
                <Text
                  key={`${item.name}_${index}`}
                  style={getStyleRep(item, index)}
                >
                  {rep}
                </Text>
              ))}
            </View>
          </View>
          <Text style={styles.textDescription}>
            {item.done}/{item.series ?? item.reps.length} series
          </Text>
          {item.done ? (
            <TouchableOpacity
              style={styles.iconActionContainer}
              onPress={() => resetSerie(index)}
            >
              <MaterialIcons name="refresh" size={32} />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  containerExercise: {
    backgroundColor: "#f3f3f3",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 4,
    marginBottom: 20,
    width: 400,
  },
  textDescription: {
    color: "#505050",
  },
  iconActionContainer: {
    backgroundColor: "#337bee33",
    justifyContent: "center",
    marginLeft: 12,
    height: 32,
    width: 32,
    borderRadius: 16,
    marginTop: "auto",
    marginBottom: "auto",
  },
});
