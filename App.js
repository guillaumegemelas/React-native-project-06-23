import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//il va falloir trouver le sujet pour cette application!
//application de type resto avec geolocalisation? et compte client? ajout de notes?

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Open up App.js to start working on your app! This is my second react
        native app
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
