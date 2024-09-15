import {
  SignUpConst
} from "../Action/SignUpActionConstants"


const initialState = {
    firstName: "",
    lastName:"",
    email:"",
    password:"",

    users: []
};



export default (state = initialState, action) => {

  switch (action.type) {
    case SignUpConst.SIGNUP_SUCC:
      const isUser = state.users.find (i=>i.email== action.newUser.email); //cart k buttons k action py addToCartAction productAction.js mein call hoga 
      if(isUser)
      {        alert('user already exists')
      }
      else
      {
        state={
          ...state,
          users:[...state.users,action.newUser]
        };
      }
      break;
  }
  return state;
};
