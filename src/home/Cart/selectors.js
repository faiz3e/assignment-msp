export const selectCartItems = (state) => {
  return state.cartReducer && state.cartReducer.cartItems
}

export const selectCartTotalPayableAmount=(state)=>{
  return state.cartReducer.totalPayableAmount
}