import { CATEGORIES, ALLPRODUCTS } from '../../Data/DummyData';
import {
  addToCartActionConst,
  deleteCartItemActionConst
} from "../Action/ProductActionConstants"


const initialState = {
  allCategories: CATEGORIES,
  allProduct: ALLPRODUCTS,

  myCart: [],
};



export default (state = initialState, action) => {

  switch (action.type) {
    case addToCartActionConst.ADD_TO_CART_SUCC:
      var itemData = state.myCart.find(i => i.id == action.cartItem.id); //cart k buttons k action py addToCartAction productAction.js mein call hoga 
      if (itemData) {
        var q = itemData.quantity + 1;

        state = {
          ...state,
          myCart: state.myCart.filter(i => i.id !== action.cartItem.id)
        }

        var cartItem = action.cartItem
        cartItem.quantity = q

        state = {
          ...state,
          myCart: [...state.myCart, cartItem]
        };


      }
      else {
        state = {
          ...state,
          myCart: [...state.myCart, action.cartItem]
        };
      }







      //       var isadd = false;

      //       for(let i = 0; i < state.myCart.length; i++)
      //       {
      //           if(action.cartItem.id===state.myCart[i].id) {

      //             state.myCart[i].quantity = state.myCart[i].quantity + 1

      //   isadd = true

      //   }
      // }
      //   if (!isadd) {
      //     //action.cartItem.quantity=1
      //       state={
      //         ...state,
      //         myCart:[...state.myCart,action.cartItem]
      //       };

      //     }
      //     // }
      break;

    case deleteCartItemActionConst.DELETE_CART_ITEM:


      var itemData = state.myCart.find(i => i.id == action.itemId); //cart k buttons k action py addToCartAction productAction.js mein call hoga 

      if (itemData.quantity > 1) {

        itemData.quantity = itemData.quantity - 1


        state = {
          ...state,
          myCart: state.myCart.filter(i => i.id !== action.itemId)
        }

        state = {
          ...state,
          myCart: [...state.myCart, itemData]
        };

      }
else {


      state = {
        ...state,
        myCart: state.myCart.filter(i => i.id !== action.itemId)
      }

    }
      break;
  }
  return state;
};
