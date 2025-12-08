import { IProduct } from "@/components/modules/root-layout/home/offer-section/recommended-product/recommended";
import { createSlice } from "@reduxjs/toolkit";

export interface ICartItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface ICartState {
  items: ICartItem[];
  totalPrice: number;
}

const initialState: ICartState = { items: [], totalPrice: 0 };

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    add: (state, action: { payload: IProduct; type: string }) => {
      const { id, title, price, images } = action.payload;
      const existingItem = state.items.find((item) => item.id == id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = price * existingItem.quantity;
      } else {
        state.items.push({
          id: id,
          name: title,
          image: images[0],
          quantity: 1,
          unitPrice: price,
          totalPrice: price,
        });
      }

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    remove: (state: ICartState, action: { payload: string; type: string }) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    increment: (state, action: { payload: string; type: string }) => {
      const existingItem = state.items.find(
        (item) => item.id == action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1 as number;
        existingItem.totalPrice =
          existingItem.unitPrice * existingItem.quantity;
      }

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    decrement: (state, action: { payload: string; type: string }) => {
      const existingItem = state.items.find(
        (item) => item.id == action.payload
      );
      if (existingItem?.quantity == 1) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
        state.totalPrice = state.items.reduce(
          (total, item) => total + item.totalPrice,
          0
        );
      } else if (existingItem && existingItem?.quantity > 1) {
        existingItem.quantity -= 1 as number;
        existingItem.totalPrice =
          existingItem.unitPrice * existingItem.quantity;
      }

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { add, remove, increment, decrement, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
