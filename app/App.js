import "../global.css";
import { createRef, useState } from "react";
import { ScrollView, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => setGoals((currentGoals) => [...currentGoals, goal]);

  const removeGoal = (index) =>
    setGoals((currentGoals) => currentGoals.filter((_, i) => i !== index));

  return (
    <View className="py-12 px-5 gap-5">
      <GoalInput addGoal={addGoal} />

      <ScrollView className="mb-7">
        <View className="gap-3">
          {goals.map((goal, index) => (
            <GoalItem key={index} goal={goal} removeGoal={() => removeGoal(index)} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
