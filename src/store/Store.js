import { configureStore } from "@reduxjs/toolkit";
import  addresReducer  from "./AddressSlice";
import authReducer  from "./AuthSlice";
import  playerReducer  from "./PlayerSlice";
import categoryReducer from "./CategorySlice"
import productReducer from "./ProductSlice"
import UiReducer from "./UiSlice"
import CartReducer from "./CartSlice"
const store = configureStore({
    reducer: {
        auth: authReducer,
        address: addresReducer,  
        player: playerReducer ,
        category : categoryReducer,
        product : productReducer,
        uislice : UiReducer,
        cart : CartReducer,
    }
});

export default store;
