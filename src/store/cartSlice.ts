import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { CartItem, Course } from "@/types";

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const calculateTotal = (items: CartItem[]) => {
  return items.reduce((sum, item) => {
    return sum + item.course.price * item.quantity;
  }, 0);
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (
      state,
      action: PayloadAction<Course>
    ) => {
      const existingItem = state.items.find(
        (item) => item.course.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          course: action.payload,
          quantity: 1,
        });
      }

      state.total = calculateTotal(state.items);
    },

    removeFromCart: (
      state,
      action: PayloadAction<string>
    ) => {
      state.items = state.items.filter(
        (item) => item.course.id !== action.payload
      );

      state.total = calculateTotal(state.items);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{
        courseId: string;
        quantity: number;
      }>
    ) => {
      const item = state.items.find(
        (item) => item.course.id === action.payload.courseId
      );

      if (item) {
        item.quantity = action.payload.quantity;
      }

      state.total = calculateTotal(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
