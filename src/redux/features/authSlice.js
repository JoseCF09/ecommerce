import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("user")) || {
  email: "",
  firstName: "",
  lastName: "",
  rol: "",
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.rol = action.payload.rol;
      state.isLogin = true;
      console.log(state);
      localStorage.setItem("user", JSON.stringify(state));
    },
    signOut: (state, action) => {
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.rol = "";
      state.isLogin = false;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
