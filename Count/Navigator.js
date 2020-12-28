import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieInfo from "../MovieInfo";
import Listview from "../Listview";
import Home from "./Home";
const Stack = createStackNavigator();

function MyStack(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="title">
        <Stack.Screen
          options={{ headerShown: false }}
          name="title"
          component={Home}
        />
        <Stack.Screen
          name="Movies"
          component={Listview}
          options={{
            title: "Movies",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "yellow",
          }}
        />

        <Stack.Screen
          name="MoviesScreen"
          component={MovieInfo}
          options={{
            title: "Details",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "yellow",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
