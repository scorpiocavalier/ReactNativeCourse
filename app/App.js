import "../global.css";
import { createRef, useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";

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
      <View className="flex-row justify-between items-center gap-3">
        <TextInput
          className="flex-1 border border-[#ccc] p-3"
          ref={inputRef}
          placeholder="Your course goal"
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={addGoal}
          submitBehavior="submit"
        />
        <Button title="Add Goal" onPress={addGoal} />
      </View>

      <ScrollView className="mb-7">
        <View className="gap-3">
          {goals.map((goal, index) => (
            <View key={index} className="rounded">
              <Text
                className="rounded p-3 text-white bg-[#444]"
                onPress={() => removeGoal(index)}
              >
                {goal}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
