export const selectCartItems = (state) => {
  return state.cartReducer && state.cartReducer.cartItems
}

export const selectCartTotalPayableAmount = (state) => {
  return state.cartReducer.totalPayableAmount && state.cartReducer.totalPayableAmount
}

export const selectTotalWeight = (state) => {
  return state.cartReducer.totalWeight && state.cartReducer.totalWeight
}

export const selectItemsCount = (state) => {
  return state.cartReducer.totalItems && state.cartReducer.totalItems
}