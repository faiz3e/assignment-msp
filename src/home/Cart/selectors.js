export const getCartSelector = (state) => {
  return state.cartReducer&&state.cartReducer.cartItems
}