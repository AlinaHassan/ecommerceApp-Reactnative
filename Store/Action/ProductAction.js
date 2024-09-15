import {addToCartActionConst, 
  CartQtyAction, 
  deleteCartItemActionConst} from '../Action/ProductActionConstants';

export const addToCartAction = item => {
  return async dispatch => {
    dispatch({
      type: addToCartActionConst.ADD_TO_CART_SUCC,
      cartItem: item,    //data
    });
    console.log("product")
  };
};

// export const addProductQty=()=>{
//   return async dispatch=>{

//   };
// }


export const deleteCartItem = id => {
  return async dispatch => {
    dispatch({
      type: deleteCartItemActionConst.DELETE_CART_ITEM,
      itemId: id,    //data
    });
  };
};