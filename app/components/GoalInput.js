import { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default function GoalInput({ addGoal }) {
  const [inputText, setInputText] = useState("");

  const onAddGoal = () => {
    addGoal(inputText.trim());
    setInputText("");
  };

  return (
    <View className="flex-row justify-between items-center gap-3">
      <TextInput
        className="flex-1 border border-[#ccc] p-3"
        placeholder="Your course goal"
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={onAddGoal}
        submitBehavior="submit"
      />
      <Button title="Add Goal" onPress={onAddGoal} />
    </View>
  );
}
