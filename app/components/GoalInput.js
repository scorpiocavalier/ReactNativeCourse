import { View, TextInput, Button } from "react-native";

export default function GoalInput({ inputRef, inputText, setInputText, addGoal }) {
  return (
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
  );
}
