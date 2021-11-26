import { Image, TouchableOpacity } from "react-native";
import React from "react";

import Onboarding from "react-native-onboarding-swiper"; // 0.4.0

export default function Intro({ navigation }) {
  return (
    <Onboarding
      onDone={() => navigation.navigate("Home")}
      onSkip={() => navigation.navigate("Home")}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/pic1.png")} />,
          title: "CookBook",
          subtitle: "Your personal guide on cooking",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/pic2.png")} />,
          title: "Learn New Recipes",
          subtitle: "Discover new recipes today!",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/pic3.png")} />,
          title: "Start your journey now!",
          subtitle: "Get your cooing journey started now!",
        },
      ]}
    />
  );
}
