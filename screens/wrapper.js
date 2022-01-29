import React from "react";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
var id = "",
  name = "",
  email = "",
  username = "",
  password = "";

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeFeed"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f07176",
          elevation: 0,
        },
        headerTitleStyle: {
          color: "white",
          fontSize: 25,
        },
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home Feed"
        component={Home}
        options={{
          headerLeft: () => (
            <MaterialCommunityIcons name="home" color={"#FFF"} size={30} />
          ),
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => (
            <MaterialCommunityIcons name="account" color={"#FFF"} size={30} />
          ),
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        initialParams={{
          id: id,
          name: name,
          email: email,
          username: username,
          password: password,
        }}
      />
    </Tab.Navigator>
  );
}
export default function App({ route }) {

  id = route.params.account_id;
  name = route.params.name;
  email = route.params.email;
  username = route.params.username;
  password = route.params.password;

  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}