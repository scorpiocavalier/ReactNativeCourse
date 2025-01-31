import { View, Text, Pressable } from "react-native";

export default function GoalItem({ goal, removeGoal }) {
  return (
    <Pressable onPress={removeGoal}>
      <View className="rounded-lg">
        <Text className="rounded p-3 text-xl text-white bg-black">{goal}</Text>
      </View>
    </Pressable>
  );
}
