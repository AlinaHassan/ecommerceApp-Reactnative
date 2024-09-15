import {SignUpConst} from '../Action/SignUpActionConstants';
  
  export default function SignUpAction(fields) {
    return async dispatch => {
      dispatch({
        type: SignUpConst.SIGNUP_SUCC,
        newUser: fields,    //payload
      });
    };
  };
  