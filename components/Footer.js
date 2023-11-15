import { View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 30,
        borderWidth: 1,
        zIndex: 1,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Icon name="home" size={20} color={"black"} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("profile")}>
        <Icon name="user" size={20} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
