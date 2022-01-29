import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Profile({ route, navigation }) {
  const [headerName, setHeaderName] = useState(route.params.name);
  const [headerEmail, setHeaderEmail] = useState(route.params.email);
  const [name, setName] = useState(route.params.name);
  const [email, setEmail] = useState(route.params.email);
  const [username, setUsername] = useState(route.params.username);
  const [password, setPassword] = useState(route.params.password);
  const [buttonLabel, setButtonLabel] = useState("Update Profile");
  const [isEditing, setEditing] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <View style={styles.info}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: "floralwhite",
              top: "50%",
            }}
          >
            {headerName}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "floralwhite",
              top: "50%",
            }}
          >
            {headerEmail}
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.fullinfo}>
          <View style={{ height: 50 }}></View>
          <Text
            style={{
              fontSize: 25,
              color: "black",
            }}
          >
            Your Information
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "#b7b7b7",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            Name
          </Text>
          <TextInput
            style={styles.textinput}
            onChangeText={(value) => setName(value)}
            value={name}
            editable={isEditing}
          />
          <Text
            style={{
              fontSize: 18,
              color: "#b7b7b7",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            Username
          </Text>
          <TextInput
            style={styles.textinput}
            onChangeText={(value) => setUsername(value)}
            value={username}
            editable={isEditing}
          />
          <Text
            style={{
              fontSize: 18,
              color: "#b7b7b7",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            Email
          </Text>
          <TextInput
            style={styles.textinput}
            onChangeText={(value) => setEmail(value)}
            value={email}
            editable={isEditing}
          />
          <Text
            style={{
              fontSize: 18,
              color: "#b7b7b7",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            Password
          </Text>
          <TextInput
            style={styles.textinput}
            onChangeText={(value) => setPassword(value)}
            value={password}
            secureTextEntry={true}
            editable={isEditing}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "#f07176",
              padding: 10,
              height: 50,
              borderRadius: 50,
              width: 200,
              margin: 10,
            }}
            onPress={() => {

              setEditing(isEditing ? false : true);

              setButtonLabel(isEditing ? "Update Profile" : "Save Profile");
              setHeaderName(name);
              setHeaderEmail(email);

              if (isEditing) {
                fetch("http://192.168.1.3:3000/accounts/" + route.params.id, {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: name,
                    email: email,
                    username: username,
                    password: password,
                  }),
                });
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
              {buttonLabel}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 17,
                color: "red",
                fontWeight: "bold",
                padding: 10,
              }}
            >
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
    alignItems: "center",
  },
  bg: {
    backgroundColor: "#f07176",
    width: 430,
    height: 100,
  },
  info: {
    backgroundColor: "#f07176",
    alignItems: "center",
  },
  fullinfo: {
    alignSelf: "flex-start",
    padding: 10,
  },
  textinput: {
    fontSize: 18,
    borderColor: "#999494",
    borderWidth: 1,
    paddingLeft: 15,
    fontSize: 20,
    borderRadius: 20,
    width: 400,
    height: 50,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
  },
});
