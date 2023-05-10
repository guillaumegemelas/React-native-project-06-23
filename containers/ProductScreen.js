import { Text, View, TouchableOpacity } from "react-native";

const ProductScreen = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the ProductScreen component</Text>
      <Text>Poids passé lors de la navigation : {route.params.poids}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Movie")}>
        <Text>Go to movie!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductScreen;
