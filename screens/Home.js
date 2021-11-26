import * as React from "react";
import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";

import Carousel from "react-native-snap-carousel";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Adobo",
          text: "A spicy marinade used in Latin American cuisine and usually containing vinegar, garlic, and chili peppers chipotles in adobo.",
          image:
            "https://panlasangpinoy.com/wp-content/uploads/2009/08/Best-Pork-Adobo-Recipe.jpg",
        },
        {
          title: "Sinigang",
          text: "Prepared with different vegetables like kangkong, taro, radish, string beans, okra, green chillies, tomatoes and eggplant.",
          image:
            "https://panlasangpinoy.com/wp-content/uploads/2018/11/Sinigang-na-Baboy-Recipe.jpg",
        },
        {
          title: "Mechado",
          text: "braised beef dish originating from the Philippines inspired by culinary methods of Spain, which it was a former colony of. Soy sauce and calamansi fruits are key ingredients to the braising liquid.",
          image:
            "https://panlasangpinoy.com/wp-content/uploads/2013/12/beef-mechado.jpg",
        },
        {
          title: "Afritada",
          text: "Afritada is a Philippine dish consisting of chicken, beef, or pork braised in tomato sauce with carrots, potatoes, and red and green bell peppers.",
          image:
            "https://panlasangpinoy.com/wp-content/uploads/2018/12/Chicken-Afritada-Recipe-Panlasang-Pinoy.jpg",
        },
        {
          title: "Menudo",
          text: "A traditional stew from the Philippines made with pork and sliced liver in tomato sauce with carrots and potatoes.",
          image:
            "https://panlasangpinoy.com/wp-content/uploads/2009/02/pork-menudo-recipe.jpg",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 15,
          height: 250,
          padding: 10,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{ height: 130, borderRadius: 15 }}
        />
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  render() {
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
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: 365,
            padding: 10,
            // marginLeft: 25,
            // marginRight: 25,
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
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
