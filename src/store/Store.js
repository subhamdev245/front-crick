import { configureStore } from "@reduxjs/toolkit";
import  addresReducer  from "./AddressSlice";
import authReducer  from "./AuthSlice";
import  playerReducer  from "./PlayerSlice";
import categoryReducer from "./CategorySlice"
import productReducer from "./ProductSlice"
const store = configureStore({
    reducer: {
        auth: authReducer,
        address: addresReducer,  
        player: playerReducer ,
        category : categoryReducer,
        product : productReducer,
    }
});

export default store;
