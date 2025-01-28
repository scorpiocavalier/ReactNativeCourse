import "../global.css";
import { createRef, useState } from "react";
import { Button, ScrollView, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const inputRef = createRef();
  const [inputText, setInputText] = useState("");
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    const goal = inputText.trim();
    setInputText("");
    setGoals((currentGoals) => [...currentGoals, goal]);
  };

  const removeGoal = (index) =>
    setGoals((currentGoals) => currentGoals.filter((_, i) => i !== index));

  return (
    <View className="py-12 px-5 gap-5">
      <GoalInput
        inputRef={inputRef}
        inputText={inputText}
        setInputText={setInputText}
        addGoal={addGoal}
      />

      <ScrollView className="mb-7">
        <View className="gap-3">
          {goals.map((goal, index) => (
            <GoalItem key={index} index={index} goal={goal} removeGoal={removeGoal} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
