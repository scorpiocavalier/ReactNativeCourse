import { View, Text, Pressable } from "react-native";

export default function GoalItem({ goal, removeGoal }) {
  return (
    <Pressable onPress={removeGoal}>
      <View className="rounded">
        <Text className="rounded p-3 text-white bg-[#444]">{goal}</Text>
      </View>
    </Pressable>
  );
}
