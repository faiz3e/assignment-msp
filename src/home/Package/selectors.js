export const selectPackageItems = (state) => {
  return state.packageReducer && state.packageReducer.newPackageByprice && state.packageReducer.newPackageByprice
}
