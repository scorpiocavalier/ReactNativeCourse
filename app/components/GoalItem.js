import { View, Text } from "react-native";

export default function GoalItem({ index, goal, removeGoal }) {
  return (
    <View className="rounded">
      <Text
        className="rounded p-3 text-white bg-[#444]"
        onPress={() => removeGoal(index)}
      >
        {goal}
      </Text>
    </View>
  );
}
