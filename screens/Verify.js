import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, verify } from "../redux/actions/action";

const Verify = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { error, loading } = useSelector((state) => state.auth);

  const [otp, setOtp] = useState("");

  const forgotHandler = () => {
    dispatch(verify(otp));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <View style={style.loginPage}>
      <View style={style.loginContainer}>
        <View style={style.loginHeadingDiv}>
          <View style={style.loginHeadingDivDiv}>
            <Text style={style.loginHeading}>VERIFICATION</Text>
          </View>
        </View>
        {/*  */}
        <View style={style.loginContent}>
          <TextInput
            style={style.loginInput}
            placeholder="OTP"
            value={otp}
            onChangeText={setOtp}
          />
        </View>
        {/*  */}
        <View>
          <Button
            disabled={!otp || loading}
            textColor="white"
            buttonColor="black"
            style={style.loginBtn}
            onPress={forgotHandler}
          >
            Verify
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

export default Verify;
