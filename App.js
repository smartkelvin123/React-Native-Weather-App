import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./src/component/Tabs";

import { useGetWeather } from "./src/hooks/useGetWeather";
// import ErrorItem from "./src/components/ErrorItem";
import ErrorItem from "./src/component/ErrorItem";

const App = () => {
  const [loading, error, weather] = useGetWeather();

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default App;
