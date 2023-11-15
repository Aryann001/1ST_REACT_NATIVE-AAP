import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ProfilrPic } from "../assets/image";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../redux/actions/action";

const Register = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { registerLoading, error, message } = useSelector(
    (state) => state.auth
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState();

  const handleImage = () => {
    navigation.navigate("camera", { updateProfile: false });
  };

  const registerHandler = () => {
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);

    if (avatar !== undefined) {
      myForm.append("avatar", avatar);
    }

    dispatch(register(myForm));
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

    if (message) {
      alert(message);
      navigation.navigate("verify");
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [route, dispatch, error, message, alert]);

  return (
    <View style={style.loginPage}>
      <View style={style.loginContainer}>
        <View style={style.loginHeadingDiv}>
          <View style={style.loginHeadingDivDiv}>
            <Text style={style.loginHeading}>REGISTER</Text>
          </View>
        </View>
        {/*  */}
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
              Choose Image
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
            inputMode="email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={style.loginInput}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <View style={style.signupForgotDiv}>
            <TouchableOpacity>
              <Text></Text>
            </TouchableOpacity>
            {/*  */}
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text style={style.signupForgotText}>
                Have An Account ? Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*  */}
        <View>
          <Button
            disabled={!email || !password || !name || registerLoading}
            textColor="white"
            buttonColor="black"
            style={style.loginBtn}
            onPress={registerHandler}
          >
            Sign Up
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

export default Register;
