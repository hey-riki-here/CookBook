import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ToastAndroid,
  ActivityIndicator,
  Modal,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login({ navigation }) {
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
          Sign in
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
            secureTextEntry={true}
            value={password}
          />
        </View>
        <View style={{ height: 20 }}></View>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={async () => {
            setShowModal(true);
            await fetch(
              "http://192.168.1.3:3000/accounts/" + username + "/" + password
            )
              .then((response) => response.json())
              .then((responseJson) => {
                try {
                  
                  responseJson[0].account_id;
                  navigation.navigate("wrapper", responseJson[0]);
                } catch (error) {
                  ToastAndroid.show(
                    "Invalid username or password!",
                    ToastAndroid.LONG
                  );
                }
              })
              .catch((error) => {
                ToastAndroid.show(
                  "Please input username and password!",
                  ToastAndroid.LONG
                );
              });
              setShowModal(false);
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 20,
              color: "#fff",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 15,
              color: "#f07176",
            }}
          >
            Don't have an account? Sign up here.
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Logging in...</Text>
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
    height: 300,
  },
  textinput: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#f6c9ca",
    width: 300,
    margin: 10,
  },
  buttonLogin: {
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
