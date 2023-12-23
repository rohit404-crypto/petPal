import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import VetHeader from "../components/VetHeader";
import { Icon } from "@rneui/themed";
import { Divider } from "react-native-elements";
import VetDescriptionContent from "../components/VetDescriptionContent";

const VetDescriptionScreen = () => {
  const images = [1, 2, 3, 4];

  return (
    <ScrollView style={{ flex: 1 }}>
     <VetHeader/>
     <VetDescriptionContent images={images} />
    </ScrollView>
  );
};

export default VetDescriptionScreen;
