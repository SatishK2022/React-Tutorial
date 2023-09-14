import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
});

export default store;



/*
    Create Store 
        configureStore -> redux-toolkit
    
    Provide store to app component
        <Provider store={store}/> -> react-redux

    Slice
        createSlice({     -> redux-toolkit
            name: "cart",
            initialState: {
                items: []
            },
            reducers: {
                addItem: (state, action) => {
                    state.items.push(action.payload);
                },
                removeItem: (state, action) => {
                    state.items.pop();
                },
                clearCart: (state) => {
                    state.items = [];
                }
            }
        })

        export const { addItem, removeItem, clearCart } = cartSlice.actions;
        export default cartSlice.reducer;

    Put the slice into the store
        {
            reducer: {
                cart: cartSlice;
            }
        }
*/