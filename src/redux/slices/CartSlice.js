import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmaount: 0,
    totalQuantity: 0
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );
            if (!existingItem) {
                state.totalQuantity++;
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imageUrl: newItem.imageUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    description : newItem.description
                });
                
                state.totalAmaount = state.cartItems.reduce((total, item) => total +
                    Number(item.price) * Number(item.quantity), 0);
                console.log("eklendi", newItem);
            }
        },
        removeItem: (state, action) => {
            const idToRemove = action.payload;
            console.log("idToRemove", idToRemove);
            const existingItemIndex = state.cartItems.findIndex(item => item.id === idToRemove);
            console.log("existingItemIndex", existingItemIndex);
            if (existingItemIndex !== -1) {
                const existingItem = state.cartItems[existingItemIndex];
                state.totalQuantity -= existingItem.quantity;
                state.totalAmaount -= existingItem.totalPrice;
                if (existingItem.quantity === 1) {
                    state.cartItems.splice(existingItemIndex, 1);
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice -= existingItem.price;
                }
            }
        }
    },
    
});

export const cartActions = CartSlice.actions

export default CartSlice.reducer