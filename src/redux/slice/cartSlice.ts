import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.customization === action.payload.customization,
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (
      state,
      action,
    ) => {
      const item = state.items.find(
        (i) =>
          i.id === action.payload.id &&
          i.customization === action.payload.customization,
      );
      if (item) {
        item.quantity = Math.max(1, item.quantity + action.payload.items);
      }
    },
    removeFromCart: (
      state,
      action,
    ) => {
      state.items = state.items.filter(
        (i) =>
          !(
            i.id === action.payload.id &&
            i.customization === action.payload.customization
          ),
      );
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
