import { createReducer } from "@reduxjs/toolkit";

export const authReducer = createReducer(
  {},
  {
    LOGIN_REQUEST: (state, action) => {
      state.loading = true;
    },
    LOGIN_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    LOGIN_FAIL: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    REGISTER_REQUEST: (state, action) => {
      state.registerLoading = true;
    },
    REGISTER_SUCCESS: (state, action) => {
      state.registerLoading = false;
      state.message = "OTP Sent To Your Email";
      state.user = action.payload;
    },
    REGISTER_FAIL: (state, action) => {
      state.registerLoading = false;
      state.error = action.payload;
    },

    VERIFY_REQUEST: (state, action) => {
      state.loading = true;
    },
    VERIFY_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    VERIFY_FAIL: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    LOGOUT_SUCCESS: (state, action) => {
      state.isAuthenticated = false;
      state.message = action.payload;
    },

    LOGOUT_FAIL: (state, action) => {
      state.isAuthenticated = true;
      state.error = action.payload;
    },

    MY_PROFILE_REQUEST: (state, action) => {
      state.loading = true;
    },
    MY_PROFILE_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    MY_PROFILE_FAIL: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.myProfileError = action.payload;
    },

    RESET_PASSWORD_REQUEST: (state, action) => {
      state.loading = true;
    },
    RESET_PASSWORD_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.message = "Password Reseted";
    },
    RESET_PASSWORD_FAIL: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    CLEAR_ERROR: (state, action) => {
      state.error = null;
    },

    CLEAR_MESSAGE: (state, action) => {
      state.message = null;
    },
  }
);

export const taskReducer = createReducer(
  {},
  {
    ADD_TASK_REQUEST: (state, action) => {
      state.loading = true;
    },
    ADD_TASK_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    ADD_TASK_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    UPDATE_TASK_REQUEST: (state, action) => {
      state.loading = true;
    },
    UPDATE_TASK_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    UPDATE_TASK_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    REMOVE_TASK_REQUEST: (state, action) => {
      state.loading = true;
    },
    REMOVE_TASK_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    REMOVE_TASK_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    UPDATE_PROFILE_REQUEST: (state, action) => {
      state.loading = true;
    },
    UPDATE_PROFILE_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    UPDATE_PROFILE_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    UPDATE_PASSWORD_REQUEST: (state, action) => {
      state.loading = true;
    },
    UPDATE_PASSWORD_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    UPDATE_PASSWORD_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    FORGOT_PASSWORD_REQUEST: (state, action) => {
      state.loading = true;
    },
    FORGOT_PASSWORD_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    FORGOT_PASSWORD_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    CLEAR_ERROR: (state, action) => {
      state.error = null;
    },

    CLEAR_MESSAGE: (state, action) => {
      state.message = null;
    },
  }
);
