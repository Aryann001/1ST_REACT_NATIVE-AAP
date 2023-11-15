import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../redux/actions/action";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { error, message, loading } = useSelector((state) => state.task);

  const [email, setEmail] = useState("");

  const forgotHandler = () => {
    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert(message);
      navigation.navigate("resetPassword");
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [dispatch, error, message, alert]);

  return (
    <View style={style.loginPage}>
      <View style={style.loginContainer}>
        <View style={style.loginHeadingDiv}>
          <View style={style.loginHeadingDivDiv}>
            <Text style={style.loginHeading}>FORGOT PASSWORD</Text>
          </View>
        </View>
        {/*  */}
        <View style={style.loginContent}>
          <TextInput
            style={style.loginInput}
            placeholder="Email"
            inputMode="email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        {/*  */}
        <View>
          <Button
            disabled={!email || loading}
            textColor="white"
            buttonColor="black"
            style={style.loginBtn}
            onPress={forgotHandler}
          >
            Send OTP
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
    height: "50%",
    width: "85%",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    elevation: 5,
  },

  loginHeadingDiv: {
    alignItems: "center",
  },

  loginHeadingDivDiv: {
    width: "70%",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },

  loginHeading: {
    fontSize: 22,
  },

  loginContent: {
    height: "50%",
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

  loginBtn: {
    elevation: 2,
    width: "90%",
    alignSelf: "center",
    borderRadius: 0,
  },
});

export default ForgotPassword;
