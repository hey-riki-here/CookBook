import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Modal,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={require("../assets/cookbooklogo.png")}></Image>
      <Text
        style={{
          color: "black",
          fontSize: 30,
          fontStyle: "italic",
          alignSelf: "center",
        }}
      >
        CookBook
      </Text>
      <Text
        style={{
          color: "black",
          fontSize: 15,
          fontStyle: "italic",
          alignSelf: "center",
          paddingBottom: 5,
        }}
      >
        Where cooking is made as easy as 1 2 3.
      </Text>
      <View style={{ height: 10 }}></View>
      <View style={styles.form}>
        <Text
          style={{
            color: "black",
            fontWeight: "200",
            fontSize: 30,
            alignSelf: "center",
          }}
        >
          Sign up
        </Text>
        <View style={styles.textinput}>
          <MaterialCommunityIcons
            style={{
              alignSelf: "center",
              paddingRight: 10,
            }}
            name="account-outline"
            color={"#848484"}
            size={20}
          />
          <TextInput
            style={{
              fontSize: 18,
            }}
            placeholder="Name"
            onChangeText={(value) => setName(value)}
            value={name}
          />
        </View>
        <View style={{ height: 20 }}></View>
        <View style={styles.textinput}>
          <MaterialCommunityIcons
            style={{
              alignSelf: "center",
              paddingRight: 10,
            }}
            name="account-outline"
            color={"#848484"}
            size={20}
          />
          <TextInput
            style={{
              fontSize: 18,
            }}
            placeholder="Username"
            onChangeText={(value) => setUsername(value)}
            value={username}
          />
        </View>
        <View style={{ height: 20 }}></View>
        <View style={styles.textinput}>
          <MaterialCommunityIcons
            style={{
              alignSelf: "center",
              paddingRight: 10,
            }}
            name="email-outline"
            color={"#848484"}
            size={20}
          />
          <TextInput
            style={{
              fontSize: 18,
            }}
            placeholder="Email"
            onChangeText={(value) => setEmail(value)}
            value={email}
          />
        </View>
        <View style={{ height: 20 }}></View>
        <View style={styles.textinput}>
          <MaterialCommunityIcons
            style={{
              alignSelf: "center",
              paddingRight: 10,
            }}
            name="lock-outline"
            color={"#848484"}
            size={20}
          />
          <TextInput
            style={{
              fontSize: 18,
            }}
            placeholder="Password"
            onChangeText={(value) => setPassword(value)}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <View style={{ height: 20 }}></View>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            try {
              if (
                (!name && !email && !username && !password) ||
                !name ||
                !email ||
                !username ||
                !password
              ) {
                ToastAndroid.show(
                  "Please complete the form!",
                  ToastAndroid.LONG
                );
              } else {
                setShowModal(true);
                var accId;
                await fetch("http://192.168.1.3:3000/accounts")
                  .then((response) => response.json())
                  .then((responseJson) => {
                    accId = responseJson.data.length + 1;
                  })
                  .catch((error) => {
                    console.log(error);
                  });

                await fetch("http://192.168.1.3:3000/accounts", {
                  method: "post",
                  mode: "no-cors",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    account_id: accId,
                    name: name,
                    email: email,
                    username: username,
                    password: password,
                  }),
                });

                setName("");
                setEmail("");
                setUsername("");
                setPassword("");
                setShowModal(false);
                navigation.navigate("Login");
              }
            } catch (error) {
              console.log(error);
            }
           
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 20,
              color: "#fff",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 15,
              color: "#f07176",
            }}
          >
            Already have an account? Sign in here.
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Signing up...</Text>
            <ActivityIndicator size="large" color="#f07176" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    borderRadius: 15,
    height: 400,
  },
  textinput: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#f6c9ca",
    width: 300,
    margin: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f07176",
    padding: 10,
    width: 100,
    height: 50,
    borderRadius: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
});
