import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  openModal: false,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { _id, number, price } = action.payload.data;
      const product = state.products.find((p) => p._id == _id);

      if (product) {
        state.total =
          state.total + action.payload.data.price * action.payload.data.number;
        const index = state.products.findIndex((p) => p._id == _id);
        state.products[index] = {
          ...state.products[index],
          number: state.products[index].number + number,
        };
      } else {
        state.products.push(action.payload.data);
        state.total = price * number;
      }
    },
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
  },
});

export const { addProduct, setOpenModal } = cartSlice.actions;

export default cartSlice.reducer;
