import { configureStore } from "@reduxjs/toolkit";
import  addresReducer  from "./AddressSlice";
import authReducer  from "./AuthSlice";
import  playerReducer  from "./PlayerSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        address: addresReducer,  
        player: playerReducer    
    }
});

export default store;
