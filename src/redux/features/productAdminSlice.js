import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectProduct: {
    name: "",
    description: "",
    image: "",
    priceBase: 0,
    discount: 0,
    price: 0,
    brand: "Redragon",
    category: "Teclado",
    count: 0,
    details: [{ id: 1, title: "", description: "" }],
  },
};

const productAdminSlice = createSlice({
  name: "productAdmin",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload.data;
    },
    addProduct: (state, action) => {
      state.products.push(state.selectProduct);
      state.selectProduct = {
        name: "",
        description: "",
        image: "",
        priceBase: 0,
        discount: 0,
        price: 0,
        brand: "Redragon",
        category: "Teclado",
        count: 0,
        details: [{ id: 1, title: "", description: "" }],
      };
    },
    setSelectProduct: (state, action) => {
      state.selectProduct[action.payload.name] = action.payload.value;

      if (
        action.payload.name == "discount" &&
        state.selectProduct.priceBase > 0
      )
        state.selectProduct.price =
          (state.selectProduct.priceBase *
            (100 - state.selectProduct.discount)) /
          100;
    },
    updateDetail: (state, action) => {
      const index = state.selectProduct.details.findIndex(
        (product) => product.id == action.payload.data.id
      );

      state.selectProduct.details[index] = {
        ...state.selectProduct.details[index],
        ...action.payload.data,
      };
    },
    addDetail: (state, action) => {
      state.selectProduct.details.push({
        id: state.selectProduct.details.length + 1,
        title: "",
        description: "",
      });
    },
    deleteDetail: (state) => {
      state.selectProduct.details.length !== 1 &&
        state.selectProduct.details.pop();
    },
  },
});

export const {
  addProducts,
  addProduct,
  setSelectProduct,
  updateDetail,
  addDetail,
  deleteDetail,
} = productAdminSlice.actions;

export default productAdminSlice.reducer;
