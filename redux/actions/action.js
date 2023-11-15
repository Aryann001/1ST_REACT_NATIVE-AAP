import axios from "axios";
import { server } from "../../App";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      config
    );

    dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error.response.data.message });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(`${server}/register`, userData, config);

    dispatch({ type: "REGISTER_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({ type: "REGISTER_FAIL", payload: error.response.data.message });
  }
};

export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PROFILE_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.put(
      `${server}/profile/update`,
      userData,
      config
    );

    dispatch({ type: "UPDATE_PROFILE_SUCCESS", payload: data.message });
  } catch (error) {
    dispatch({
      type: "UPDATE_PROFILE_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const verify = (otp) => async (dispatch) => {
  try {
    dispatch({ type: "VERIFY_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${server}/verify`, { otp }, config);

    dispatch({ type: "VERIFY_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({
      type: "VERIFY_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const updatePassword =
  (oldPassword, newPassword, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_PASSWORD_REQUEST" });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.put(
        `${server}/password/update`,
        { oldPassword, newPassword, confirmPassword },
        config
      );

      dispatch({ type: "UPDATE_PASSWORD_SUCCESS", payload: data.message });
    } catch (error) {
      dispatch({
        type: "UPDATE_PASSWORD_FAIL",
        payload: error.response.data.message,
      });
    }
  };

export const resetPassword =
  (otp, newPassword, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: "RESET_PASSWORD_REQUEST" });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.put(
        `${server}/password/reset`,
        { otp, newPassword, confirmPassword },
        config
      );

      dispatch({ type: "RESET_PASSWORD_SUCCESS", payload: data.user });
    } catch (error) {
      dispatch({
        type: "RESET_PASSWORD_FAIL",
        payload: error.response.data.message,
      });
    }
  };

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "FORGOT_PASSWORD_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${server}/password/forgot`,
      { email },
      config
    );

    dispatch({ type: "FORGOT_PASSWORD_SUCCESS", payload: data.message });
  } catch (error) {
    dispatch({
      type: "FORGOT_PASSWORD_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${server}/logout`);

    dispatch({ type: "LOGOUT_SUCCESS", payload: data.message });
  } catch (error) {
    dispatch({ type: "LOGOUT_FAIL", payload: error.response.data.message });
  }
};

export const getMyProfile = () => async (dispatch) => {
  try {
    dispatch({ type: "MY_PROFILE_REQUEST" });

    const { data } = await axios.get(`${server}/myprofile`);

    dispatch({ type: "MY_PROFILE_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({ type: "MY_PROFILE_FAIL", payload: error.response.data.message });
  }
};

export const addTask = (title, description) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_TASK_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${server}/task/add`,
      { title, description },
      config
    );

    dispatch({ type: "ADD_TASK_SUCCESS", payload: data.message });
  } catch (error) {
    dispatch({ type: "ADD_TASK_FAIL", payload: error.response.data.message });
  }
};

export const updateTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_TASK_REQUEST" });

    const { data } = await axios.get(`${server}/task/${taskId}`);

    dispatch({ type: "UPDATE_TASK_SUCCESS", payload: data.message });
  } catch (error) {
    dispatch({
      type: "UPDATE_TASK_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "REMOVE_TASK_REQUEST" });

    const { data } = await axios.delete(`${server}/task/${taskId}`);

    dispatch({ type: "REMOVE_TASK_SUCCESS", payload: data.message });
  } catch (error) {
    dispatch({
      type: "REMOVE_TASK_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERROR" });
};
