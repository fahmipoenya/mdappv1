import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { ListFilm, Login } from "../pages";
import Filter from "../pages/Filter";
import Sort from "../pages/Sort";
import ListFilmLocal from "../pages/ListFilmLocal";

const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function MyTabs({ navigation, route }) {
  return ( 
      <TopTab.Navigator screenOptions={{ tabBarStyle: { marginBottom: -30 } }}>
        <TopTab.Screen
          name="Film Local"
          component={ListFilm}
          options={{ headerShown: false }}
        />
        <TopTab.Screen
          name="Film Internasional"
          component={ListFilmLocal}
          options={{ headerShown: false }}
        />
      </TopTab.Navigator> 
  );
}

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FilterPage"
        component={Filter}
        options={{ title: "Edit Filter", headerShown: false }}
      />
      <Stack.Screen
        name="SortPage"
        component={Sort}
        options={{ title: "Edit Sort", headerShown: false }}
      />
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
