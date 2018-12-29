import { PACK_PRODUCTS } from "./cartActionTypes";
import { of } from "rxjs";

const initialState = {
  packageItems: 0,
  totalPrice: 0,
  totalWeight: 0
};

export function packageReducer(state = initialState, action) {
  switch (action.type) {

    case PACK_PRODUCTS:
      console.log("PACK_PRODUCTS of reducer", action.payload)
      let total = 0
      let newCart = []
      let i = 0;
      newCart[0]=[]
      
      action.payload.map((item) => {
        if (total + item.price > 250) {
          i++; total = 0;newCart[i]=[]
          console.log("i , total",i,total);
        }
        if (total > 250) {
          console.log("more than 250");
        } else {
          total = total + item.price
          newCart[i].push({item}) 
          console.log("newcart", newCart);
          console.log("total , i ",total , i);
        }
      })


      // let arr = action.payload.map((item) => {
      //   total = item.price + total;
      //   if (total < 250) {
      //     console.log(">250", total)
      //     // state.cartItems.concat(action.payload),
      //     console.log("package1", package1);
      //     return package1
      //   }
      //   else {
      //     console.log(">250", total)
      //     return package1

      //   }
      // })
      // .reduce((a, b) => { return a + b });

      // console.log("arr", arr)
      return {
        ...state,
        totalPrice: 0
      };

    default:
      return state;
  }
}

