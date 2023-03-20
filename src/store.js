import { configureStore } from "@reduxjs/toolkit";
// import foodItemsReducer from "./features/Items/foodItemsReducer";
import cartSlice from "./redux/cartSlice";
export default configureStore({
  reducer: {
    // foodItems: foodItemsReducer,
    cart:cartSlice
  },
});