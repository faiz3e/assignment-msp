//! package reducer 
import { PACK_PRODUCTS } from "./cartActionTypes";
import { DEFAULT_PACKAGE_PRICE_LIMIT } from "../../common/constants";
import { sortArr } from "../../common/commonFunctions";

const initialState = {
  packageItems: 0,
  totalPrice: 0,
  totalWeight: 0,
  packageForDelivery:[]
};

export function packageReducer(state = initialState, action) {
  switch (action.type) {
    case PACK_PRODUCTS:
      let newPackage = []
      let i = 0;
      const cartItems = action.payload.cartItems;
      const cartTotalPayableAmount = action.payload.cartTotalPayableAmount;
      const totalWeight = action.payload.totalWeight;
      const itemsCount = action.payload.itemsCount;
      let minPackageRequired = Math.round(cartTotalPayableAmount / DEFAULT_PACKAGE_PRICE_LIMIT);
      const averageWeightPackage = totalWeight / minPackageRequired;
      const sortedCart = sortArr(cartItems,'weight')
      for (i = 0; i < minPackageRequired; i++) {
        newPackage[i] = { packageNumber: i, packageWeight: 0, packagePrice: 0, items: [] }
      }
      i = 0;
      sortedCart.map((element) => {
        for (let j = 0; j < minPackageRequired; j++) {
          if (element.weight > averageWeightPackage) {
            newPackage[j].items.push(element)
            newPackage[j].packagePrice += element.price;
            newPackage[j].packageWeight += element.weight;
            break;
          }
          if (newPackage[j].packageWeight + element.weight < averageWeightPackage && newPackage[j].packagePrice + element.price < DEFAULT_PACKAGE_PRICE_LIMIT) {
            newPackage[j].items.push(element)
            newPackage[j].packagePrice += element.price;
            newPackage[j].packageWeight += element.weight;
            break;
          }
          else if (minPackageRequired - 1 === j) {
            newPackage[minPackageRequired] = { packageNumber: minPackageRequired, packageWeight: 0, packagePrice: 0, items: [] }
            newPackage[minPackageRequired].items.push(element)
            newPackage[minPackageRequired].packagePrice += element.price;
            newPackage[minPackageRequired].packageWeight += element.weight;
            minPackageRequired += 1;
            break
          }
        }return element;
      })
      console.log("newPackage", newPackage)
      state.totalPrice = cartTotalPayableAmount;
      state.totalWeight = totalWeight;
      state.packageItems=itemsCount
      state.packageForDelivery= newPackage;
      return {
        ...state
      }
    default:
      return state
  }
}
