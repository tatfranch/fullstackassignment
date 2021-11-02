import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartState {
  value: string[]
}

const initialState: CartState = {
  value: ['xxx', 'lajfal'],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      state.value.push(action.payload)
    },
    clearCart(state) {
      state.value = []
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.value = state.value.filter((item) => item !== action.payload)
    },
  },
})

export const { addToCart, clearCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
