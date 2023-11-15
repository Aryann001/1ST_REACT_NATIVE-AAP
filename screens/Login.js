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
import { clearErrors, login } from "../redux/actions/action";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated, user, message } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }

    if (isAuthenticated) {
      alert(`Welcome Back ${user.name}`);
      navigation.navigate("home");
    }
  }, [dispatch, error, isAuthenticated, user, alert]);

  return (
    <View style={style.loginPage}>
      <View style={style.loginContainer}>
        <View style={style.loginHeadingDiv}>
          <View style={style.loginHeadingDivDiv}>
            <Text style={style.loginHeading}>LOGIN</Text>
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
          <TextInput
            style={style.loginInput}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <View style={style.signupForgotDiv}>
            <TouchableOpacity onPress={() => navigation.navigate("register")}>
              <Text style={style.signupForgotText}>Sign Up</Text>
            </TouchableOpacity>
            {/*  */}
            <TouchableOpacity
              onPress={() => navigation.navigate("forgotPassword")}
            >
              <Text style={style.signupForgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*  */}
        <View>
          <Button
            disabled={!email || !password || loading}
            textColor="white"
            buttonColor="black"
            style={style.loginBtn}
            onPress={loginHandler}
          >
            Login
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
    height: "70%",
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
});

export default Login;
