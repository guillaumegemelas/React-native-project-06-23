import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import { useEffect, useState } from "react";

//ne pas oublier d'importer le package axios!!
import axios from "axios";

export default function MovieScreen({ navigation }) {
  //variables pour stocker réponse du back
  const [Data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--tmdb-back--zqfvjrr4byql.code.run/home?page=${page}`
        );

        setData(response.data);
        console.log(response.data, "---------HOME--OK--------------------");
        setIsloading(false);
      } catch (error) {
        console.log(
          error.response.data,
          "*********HOME**ERROR*******************"
        );
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      {isLoading ? (
        <View>
          <Text>en cours de chargement</Text>
          <ActivityIndicator
            size="large"
            color="#EB5A62"
            hidesWhenStopped={true}
          />
        </View>
      ) : (
        <View>
          <Text>This is the Movie component</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text>Go to home!</Text>
          </TouchableOpacity>
          <ScrollView>
            <View>
              {Data.results.map((item, index) => {
                return (
                  <View key={index}>
                    <Text>{item.original_title}</Text>
                    {/* {item.poster_path !== null ? ( */}
                    <Image
                      source={{
                        uri: `${"https://image.tmdb.org/t/p/w500"}${
                          item.poster_path
                        }`,
                      }}
                      style={{
                        width: 60,
                        height: 60,
                      }}
                    />
                    {/* ) : (
                      <Image
                        source={`${"https://image.tmdb.org/t/p/w500"}${
                          item.poster_path
                        }`}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                    )} */}
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}
