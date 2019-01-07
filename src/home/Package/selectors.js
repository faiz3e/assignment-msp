export const selectPackageItems = (state) => {
  return state.packageReducer && state.packageReducer.packageForDelivery && state.packageReducer.packageForDelivery
}
