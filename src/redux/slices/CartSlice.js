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
                (item) => item.id === item.id
            );
            state.totalQuantity++
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    image: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(existingItem.price);
                   
            }
            
            state.totalAmaount = state.cartItems.reduce((total, item) => total +
                Number(item.price) * Number(item.quantity))
            console.log("eklendi", newItem);

        }
    }
});

export const cartActions = CartSlice.actions

export default CartSlice.reducer