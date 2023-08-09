import { differenceInMilliseconds, subMilliseconds } from "date-fns";
import { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [time, setTime] = useState(0);
  const [startedTime, setStartedTime] = useState(new Date());

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() =>
        setTime(differenceInMilliseconds(new Date(), startedTime))
      );
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;

  const pause = () => {
    setIsRunning(false);
  };

  const start = () => {
    if (isStopped) {
      setStartedTime(new Date());
    } else {
      const newDate = subMilliseconds(new Date(), time);
      setStartedTime(newDate);
    }

    setIsRunning(true);
    setIsStopped(false);
  };

  const stop = () => {
    setIsRunning(false);
    setIsStopped(true);
    setTime(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>
          {hours ? `${hours}:` : ""}
          {minutes ? `${minutes.toString().padStart(2, "0")}:` : ""}
          {seconds.toString().padStart(2, "0")}:
        </Text>
        <Text style={styles.milliseconds}>
          {milliseconds.toString().padStart(3, "0").slice(0, 2)}
        </Text>
      </View>
      <View style={styles.commandContainer}>
        <View style={styles.emptySpace}></View>

        <TouchableOpacity
          onPress={isRunning ? pause : start}
          style={isRunning ? styles.pauseButton : styles.startButton}
        >
          <MaterialIcons
            name={isRunning ? "pause" : "play-arrow"}
            size={180}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={stop} style={styles.stopButton}>
          <MaterialIcons name="stop" size={60} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  time: {
    fontSize: 48,
    marginBottom: 24,
  },
  milliseconds: {
    marginTop: 16,
    fontSize: 36,
  },
  commandContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  startButton: {
    backgroundColor: "#55d",
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  pauseButton: {
    backgroundColor: "#55dd7e",
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  emptySpace: {
    width: 90,
    height: 90,
  },
  stopButton: {
    backgroundColor: "#dd5567",
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 140,
  },
});
