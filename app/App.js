import "../global.css";
import { useState } from "react";
import { Text, Button, ScrollView, View, Image } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoal = (goal) => setGoals((currentGoals) => [...currentGoals, goal]);

  const removeGoal = (index) =>
    setGoals((currentGoals) => currentGoals.filter((_, i) => i !== index));

  return (
    <View className="flex-1 py-12 px-5 gap-6">
      <View className="h-32 items-center">
        <Image
          source={require("../assets/performance-led.jpg")}
          className="w-full h-full aspect-[3/2] rounded-lg"
        />
      </View>

      <ScrollView>
        <View className="gap-3">
          {goals.map((goal, index) => (
            <GoalItem key={index} goal={goal} removeGoal={() => removeGoal(index)} />
          ))}
        </View>
      </ScrollView>

      {modalIsVisible && (
        <GoalInput
          addGoal={addGoal}
          closeModal={() => setModalIsVisible(false)}
          isVisible={modalIsVisible}
        />
      )}

      <View className="w-1/2 self-center">
        <Button title="Add Goal" color="black" onPress={() => setModalIsVisible(true)} />
      </View>
    </View>
  );
}
