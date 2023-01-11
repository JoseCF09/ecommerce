import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";
import productAdminReducer from "./features/productAdminSlice";
import { ProductService } from "../services/productService";
export const store = configureStore({
  reducer: {
    [ProductService.reducerPath]: ProductService.reducer,
    auth: authReducer,
    cart: cartReducer,
    productAdmin: productAdminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductService.middleware),
});
