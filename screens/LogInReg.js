import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function LogInReg({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          position: "absolute",
          width: 200,
          height: 200,
          top: 20,
        }}
        source={require("../assets/psicon.png")}
      />
      <Text
        style={{
          position: "absolute",
          fontSize: 30,
          color: "#dfda46",
          top: 130,
        }}
      >
        GameZone
      </Text>

      <Image
        style={{
          position: "absolute",
          top: 200,
          left: 70,
        }}
        source={require("../assets/addgameicon.png")}
      />
      <Text
        style={{
          color: "#fff",
          position: "absolute",
          top: 325,
          left: 68,
        }}
      >
        Add your favorite game
      </Text>
      <Image
        style={{
          position: "absolute",
          top: 200,
          left: 240,
        }}
        source={require("../assets/addicon.png")}
      />
      <Text
        style={{
          color: "#fff",
          position: "absolute",
          top: 325,
          left: 270,
        }}
      >
        Add friends
      </Text>

      <Image
        style={{
          position: "absolute",
          top: 360,
          left: 70,
        }}
        source={require("../assets/stats.png")}
      />
      <Text
        style={{
          color: "#fff",
          position: "absolute",
          top: 485,
          left: 68,
        }}
      >
        Monitor gaming statistics
      </Text>

      <Image
        style={{
          position: "absolute",
          top: 360,
          left: 240,
        }}
        source={require("../assets/buy.png")}
      />
      <Text
        style={{
          color: "#fff",
          position: "absolute",
          top: 485,
          left: 270,
        }}
      >
        Buy game!
      </Text>

      <Image
        style={{
          position: "absolute",
          top: 510,
          left: 70,
        }}
        source={require("../assets/stream.png")}
      />
      <Text
        style={{
          color: "#fff",
          position: "absolute",
          top: 630,
          left: 90,
        }}
      >
        Watch streams
      </Text>

      <Image
        style={{
          position: "absolute",
          top: 510,
          left: 240,
        }}
        source={require("../assets/improve.png")}
      />
      <Text
        style={{
          color: "#fff",
          position: "absolute",
          top: 630,
          left: 240,
        }}
      >
        Improve gaming skills!
      </Text>

      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          position: "absolute",
          color: "#fff",
          backgroundColor: "#2565ae",
          bottom: 90,
          width: "80%",
          height: 40,
          borderRadius: 30,
          padding: 8,
        }}
      >
        Login
      </Text>

      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          position: "absolute",
          color: "#fff",
          backgroundColor: "#00a651",
          bottom: 40,
          width: "80%",
          height: 40,
          borderRadius: 30,
          padding: 8,
        }}
      >
        Register
      </Text>

      <Text
        style={{
          position: "absolute",
          color: "#fff",
          fontSize: 15,
          bottom: 155,
        }}
      >
        Start your PRO Gaming career now! Now! Register now, FOR FREE!
      </Text>

      <Text
        style={{
          position: "absolute",
          color: "#fff",
          fontSize: 15,
          bottom: 10,
        }}
      >
        Privacy Guidelines Terms and Conditions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b3b3b",
    alignItems: "center",
    justifyContent: "center",
  },
});
