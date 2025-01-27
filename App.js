import { createRef, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

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
    <View style={styles.appView}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          ref={inputRef}
          placeholder="Your course goal"
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={addGoal}
          submitBehavior="submit"
        />
        <Button title="Add Goal" onPress={addGoal} />
      </View>

      <ScrollView style={styles.goalsScrollView}>
        <View style={styles.goalsView}>
          {goals.map((goal, index) => (
            <View key={index} style={styles.goalView}>
              <Text style={styles.goalText} onPress={() => removeGoal(index)}>
                {goal}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appView: {
    paddingBlock: 50,
    paddingInline: 20,
    gap: 20
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10
  },
  goalsScrollView: {
    marginBottom: 30
  },
  goalsView: {
    gap: 10
  },
  goalView: {
    borderRadius: 4 // IOS does not support border-radius on Text
  },
  goalText: {
    borderRadius: 4,
    paddingBlock: 10,
    paddingInline: 10,
    color: "#fff",
    backgroundColor: "#444"
  }
});
