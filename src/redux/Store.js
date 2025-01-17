import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import Categoryslice from "./slices/Categoryslice";
import SearchSlice from "./slices/SearchSlice";

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        category: Categoryslice,
        search: SearchSlice,
    }
});


export default Store;