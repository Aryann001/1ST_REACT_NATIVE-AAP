import { View, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { ProfilrPic } from "../assets/image";
import {
  clearErrors,
  getMyProfile,
  logout,
  updateProfile,
} from "../redux/actions/action";

const Profile = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { user, error } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.task);

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState();

  const handleImage = () => {
    navigation.navigate("camera", {
      updateProfile: true,
    });
  };

  const logoutHandler = async () => {
    await dispatch(logout());
    dispatch(getMyProfile());
  };

  const updateHandler = async () => {
    const myForm = new FormData();

    myForm.append("name", name);

    if (route.params) {
      if (route.params.image) {
        myForm.append("avatar", avatar);
      }
    }

    await dispatch(updateProfile(myForm));
    dispatch(getMyProfile());
  };

  useEffect(() => {
    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image);
      }
    }

    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (user) {
      setName(user.name);
      if (user.avatar && user.avatar !== undefined) {
        setAvatar(user.avatar.url);
      }
    }
  }, [route, user]);

  return (
    <View style={style.loginPage}>
      <View style={style.loginContainer}>
        <View style={style.loginContent}>
          <View style={style.profilePicDiv}>
            <Avatar.Image
              size={100}
              style={{ backgroundColor: "transparent" }}
              source={avatar !== undefined ? { uri: avatar } : ProfilrPic}
            />
            {/* <Button
              textColor="white"
              buttonColor="black"
              style={style.chooseBtn}
              onPress={handleImage}
            >
              Change Image
            </Button> */}
          </View>
          <TextInput
            style={style.loginInput}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={style.loginInput}
            placeholder="Email"
            value={user.email}
            editable={false}
          />
        </View>
        {/*  */}
        <View>
          <Button
            disabled={(name === user.name && !avatar) || loading}
            textColor="white"
            buttonColor="black"
            style={style.loginBtn}
            onPress={updateHandler}
          >
            Update
          </Button>
          <Button
            textColor="white"
            buttonColor="black"
            style={style.loginBtn}
            onPress={() => navigation.navigate("changePassword")}
          >
            Change Password
          </Button>
          <Button
            textColor="white"
            buttonColor="black"
            style={style.loginBtn}
            onPress={logoutHandler}
          >
            Logout
          </Button>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  loginPage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loginContainer: {
    height: "80%",
    width: "85%",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    elevation: 5,
    paddingVertical: 20,
  },

  loginHeadingDiv: {
    alignItems: "center",
  },

  loginHeadingDivDiv: {
    width: "50%",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },

  loginHeading: {
    fontSize: 22,
  },

  loginContent: {
    height: "70%",
    justifyContent: "space-evenly",
  },

  loginInput: {
    height: 60,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#0000004f",
    color: "black",
  },

  signupForgotDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
  },

  signupForgotText: {
    fontSize: 12,
    fontWeight: "100",
    borderBottomWidth: 1,
    color: "#41439dcf",
    borderBottomColor: "#41439dcf",
  },

  loginBtn: {
    elevation: 2,
    width: "90%",
    alignSelf: "center",
    borderRadius: 0,
    marginBottom: 10,
  },

  chooseBtn: {
    elevation: 2,
    width: "50%",
    alignSelf: "center",
    borderRadius: 0,
  },

  profilePicDiv: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 10,
  },
});

export default Profile;
