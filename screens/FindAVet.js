import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import VetHeader from "../components/VetHeader";
import VetCard from "../components/VetCard";

const FindAVet = ({ navigation }) => {
  const vetData = [
    {
      id: 1,
      image: require("../assets/Jojo.png"),
      name: "Dog And Cat Care Home",
      location: "Tundla",
      rating: 4.5,
      phone: "1234567890",
      latitude: 27.219239673235624,
      longitude: 78.23724561660393,
    },
    {
      id: 2,
      image: require("../assets/Jojo.png"),
      name: "Pet Planet",
      location: "Ranchi",
      rating: 4.4,
      phone: "07321034602",
      latitude: 23.349855454400014,
      longitude: 85.3032154287111,
    },
    {
      id: 3,
      image: require("../assets/Jojo.png"),
      name: "JOJO PET SHOP & CLINIC",
      location: "Tundla",
      rating: 4,
      phone: "1234567890",
      latitude: 27.227374837547586,
      longitude: 78.24423267614456,
    },
  ];
  return (
    <View>
      <VetHeader />
      <FlatList 
        data={vetData}
        keyExtractor={(item) => item.id}
        renderItem={({ item , index }) => (
        <Pressable onPress={() => navigation.navigate("VetDescription", { item })}>
          <VetCard  key = {index} image={item.image} name={item.name} rating={item.rating} phone={item.phone} location={item.location} Latitude={item.Latitude} Longitude={item.Longitude}  adress={item.adress}/>
        </Pressable>
        )}
        showsVerticalScrollIndicator={false}

      />
    </View>
  );
};

export default FindAVet;
