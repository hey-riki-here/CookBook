import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";

export default function App({}) {
  const initial = [];
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(async () => {
    setIsLoading(true);
    await fetch("https://api.sampleapis.com/recipes/recipes")
      .then((response) => response.json())
      .then((responseJson) => {
        setIsLoading(false);
        setCarouselItems(responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f07176", paddingTop: 10 }}
    >
      <Text
        style={{
          color: "floralwhite",
          fontSize: 30,
          fontStyle: "italic",
          alignSelf: "center",
        }}
      >
        CookBook
      </Text>
      <Text
        style={{
          color: "floralwhite",
          fontSize: 15,
          fontStyle: "italic",
          alignSelf: "center",
          paddingBottom: 5,
        }}
      >
        Where cooking is made as easy as 1 2 3.
      </Text>

      <Text
        style={{
          color: "floralwhite",
          fontSize: 20,
          fontStyle: "italic",
          alignSelf: "center",
        }}
      >
        Featured delicacies
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Carousel
          layout={"default"}
          ref={(ref) => {
            try {
              Carousel;
            } catch (error) {}
          }}
          data={isLoading ? initial : carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setShowModal(true);
                  setSelectedItem(item);
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 15,
                    height: 250,
                    padding: 10,
                  }}
                >
                  <Image
                    source={{ uri: item.photoUrl }}
                    style={{ height: 130, borderRadius: 15 }}
                  />
                  <Text style={{ fontSize: 22 }}>{item.title}</Text>
                  <Text style={{ fontSize: 18 }}>Cuisine: {item.cuisine}</Text>
                  <Text style={{ fontSize: 18 }}>
                    Main Ingredient: {item.mainIngredient}
                  </Text>
                  <Text style={{ fontSize: 18 }}>
                    Cook and Preparation Time: {item.totalTime} mins
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 350,
          padding: 10,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontStyle: "italic",
            alignSelf: "center",
          }}
        >
          Discover more recipes
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            elevation={5}
            style={{
              backgroundColor: "white",
              borderRadius: 15,
              borderColor: "black",
              height: 80,
              padding: 5,
              margin: 10,
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: "https://panlasangpinoy.com/wp-content/uploads/2018/12/Lumpiang-Shanghai-500x500.jpg",
              }}
              style={{
                height: 70,
                width: 70,
                borderRadius: 15,
                padding: 5,
              }}
            />
            <View
              style={{
                justifyContent: "space-evenly",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  marginLeft: 15,
                }}
              >
                Lumpiang Shanghai
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 15,
                }}
              >
                Most targetted food in occasions.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 15,
                }}
              >
                Ratings: ★★★★★★★★★★★★★★★
              </Text>
            </View>
          </View>
          <View
            elevation={5}
            style={{
              backgroundColor: "white",
              borderRadius: 15,
              borderColor: "black",
              height: 80,
              padding: 5,
              margin: 10,
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: "http://cdn.shopify.com/s/files/1/2713/3026/products/lucky-me-pancit-canton-chilli-mansi-instant-noodles-60g-65-p_600x.jpg?v=1545281033",
              }}
              style={{
                height: 70,
                width: 70,
                borderRadius: 15,
                padding: 5,
              }}
            />
            <View
              style={{
                justifyContent: "space-evenly",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  marginLeft: 15,
                }}
              >
                Pancit Canton
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 15,
                }}
              >
                Hunger savior specially at dawn.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 15,
                }}
              >
                Ratings: ★★★★★
              </Text>
            </View>
          </View>
          <View
            elevation={5}
            style={{
              backgroundColor: "white",
              borderRadius: 15,
              borderColor: "black",
              height: 80,
              padding: 5,
              margin: 10,
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: "https://cebubulletin.ph/wp-content/uploads/2020/01/probenn.jpg",
              }}
              style={{
                height: 70,
                width: 70,
                borderRadius: 15,
                padding: 5,
              }}
            />
            <View
              style={{
                justifyContent: "space-evenly",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  marginLeft: 15,
                }}
              >
                Chicken Proben
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 15,
                }}
              >
                A threat for your life savings.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 15,
                }}
              >
                Ratings: ★★★★
              </Text>
            </View>
          </View>

          <View
            elevation={5}
            style={{
              backgroundColor: "white",
              borderRadius: 15,
              borderColor: "black",
              height: 80,
              padding: 5,
              margin: 10,
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: "https://www.manilaspoon.com/wp-content/uploads/2012/08/Pansit2.1-500x375.png",
              }}
              style={{
                height: 70,
                width: 70,
                borderRadius: 15,
                padding: 5,
              }}
            />
            <View
              style={{
                justifyContent: "space-evenly",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  marginLeft: 15,
                }}
              >
                Pancit
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 15,
                }}
              >
                Enrile's secret to immortality.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 15,
                }}
              >
                Ratings: ★★★
              </Text>
            </View>
          </View>
          <Modal animationType="fade" transparent={true} visible={showModal}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={{ uri: selectedItem.photoUrl }}
                  style={{ height: 160, width: 300, borderRadius: 15 }}
                />
                <Text style={styles.modalText}>{selectedItem.title}</Text>
                <View style={styles.iconsAndTitle}>
                  <MaterialCommunityIcons
                    name="check-bold"
                    color={"#4ab567"}
                    size={20}
                    style={{ paddingRight: 5 }}
                  />
                  <Text style={{ fontSize: 22 }}>Ingredients</Text>
                </View>

                <Text style={{ marginTop: 5, marginBottom: 5 }}>
                  {selectedItem.ingredients}
                </Text>
                <View style={styles.iconsAndTitle}>
                  <MaterialCommunityIcons
                    name="check-bold"
                    color={"#4ab567"}
                    size={20}
                    style={{ paddingRight: 5 }}
                  />
                  <Text style={{ fontSize: 22 }}>
                    {selectedItem.servings} Servings
                  </Text>
                </View>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={{ color: "floralwhite", fontSize: 20 }}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Modal animationType="fade" transparent={true} visible={isLoading}>
            <View style={styles.loadingCenteredView}>
              <View style={styles.loadingModalView}>
                <Text style={styles.loadingModalText}>Getting recipes for you...</Text>
                <ActivityIndicator size="large" color="#f07176" />
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 350,
    height: 580,
  },
  modalText: {
    textAlign: "center",
    fontSize: 25,
    fontStyle: "italic",
    padding: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
    alignItems: "center",
  },
  buttonClose: {
    marginTop: 10,
    backgroundColor: "#f07176",
  },
  iconsAndTitle: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
  },
  loadingCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  loadingModalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
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
  loadingModalText: {
    textAlign: "center",
    fontSize: 25,
    fontStyle: "italic",
    padding: 10,
  },
});
