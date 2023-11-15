import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Footer from "./components/Footer";
import Profile from "./screens/Profile";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import Camera from "./screens/Camera";
import store from "./redux/store";
import { getMyProfile } from "./redux/actions/action";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import ChangePassword from "./screens/ChangePassword";
import ResetPassword from "./screens/ResetPassword";
import Verify from "./screens/Verify";

const Stack = createNativeStackNavigator();

const Main = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    store.dispatch(getMyProfile());
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "home" : "login"}>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="camera"
          component={Camera}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="verify"
          component={Verify}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="forgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="resetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="changePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      {isAuthenticated && <Footer />}
    </NavigationContainer>
  );
};

export default Main;
