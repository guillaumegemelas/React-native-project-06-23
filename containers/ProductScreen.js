import { Text, View } from "react-native";

const ProductScreen = ({ route }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the ProductScreen component</Text>
      <Text>Poids passé lors de la navigation : {route.params.poids}</Text>
    </View>
  );
};

export default ProductScreen;
