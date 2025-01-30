import "../global.css";
import { useState } from "react";
import { Text, Button, ScrollView, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoal = (goal) => setGoals((currentGoals) => [...currentGoals, goal]);

  const removeGoal = (index) =>
    setGoals((currentGoals) => currentGoals.filter((_, i) => i !== index));

  return (
    <View className="flex-1 pt-24 pb-6 px-5 gap-6">
      <Text className="text-center text-3xl font-bold">My Goals</Text>

      <ScrollView>
        <View className="gap-3">
          {goals.map((goal, index) => (
            <GoalItem key={index} goal={goal} removeGoal={() => removeGoal(index)} />
          ))}
        </View>
      </ScrollView>

      <Button title="Add Goal" onPress={() => setModalIsVisible(true)} />

      {modalIsVisible && (
        <GoalInput
          addGoal={addGoal}
          closeModal={() => setModalIsVisible(false)}
          isVisible={modalIsVisible}
        />
      )}
    </View>
  );
}
