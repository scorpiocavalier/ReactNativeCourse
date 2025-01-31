import { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";

export default function GoalInput({ addGoal, closeModal, isVisible }) {
  const [inputText, setInputText] = useState("");

  const onAddGoal = () => {
    const goal = inputText.trim();

    if (inputText.length) {
      addGoal(goal);
      setInputText("");
      closeModal();
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View className="flex-1 justify-center gap-6 px-12 bg-black">
        <TextInput
          className="border border-[#ccc] p-3 bg-white"
          placeholder="Your goal"
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={onAddGoal}
          submitBehavior="submit"
        />

        <View className="flex-row gap-6">
          <View className="flex-auto">
            <Button title="Add Goal" color="#b41f23" onPress={onAddGoal} />
          </View>
          <View className="flex-auto">
            <Button title="Cancel" color="#b41f23" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
