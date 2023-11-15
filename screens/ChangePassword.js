import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getMyProfile,
  updatePassword,
} from "../redux/actions/action";

const ChangePassword = () => {
  const dispatch = useDispatch();

  const { error, loading, message } = useSelector((state) => state.task);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const registerHandler = async () => {
    await dispatch(updatePassword(oldPassword, newPassword, confirmPassword));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert(message);
      dispatch(getMyProfile());
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [dispatch, error, message, alert]);

  return (
    <View style={style.loginPage}>
      <View style={style.loginContainer}>
        <View style={style.loginHeadingDiv}>
          <View style={style.loginHeadingDivDiv}>
            <Text style={style.loginHeading}>CHANGE PASSWORD</Text>
          </View>
        </View>
        {/*  */}
        <View style={style.loginContent}>
          <TextInput
            style={style.loginInput}
            placeholder="Old Password"
            secureTextEntry
            value={oldPassword}
            onChangeText={setOldPassword}
          />
          <TextInput
            style={style.loginInput}
            placeholder="New Password"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TextInput
            style={style.loginInput}
            placeholder="Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setconfirmPassword}
          />
        </View>
        {/*  */}
        <View>
          <Button
            disabled={
              !oldPassword || !newPassword || !confirmPassword || loading
            }
            textColor="white"
            buttonColor="black"
            style={style.loginBtn}
            onPress={registerHandler}
          >
            Change
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
    width: "80%",
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

export default ChangePassword;
