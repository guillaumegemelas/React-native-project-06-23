import { Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the HomeScreen component</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Product", { poids: "10" })}
      >
        <Text>Go to product!</Text>
      </TouchableOpacity>
    </View>
  );
}
