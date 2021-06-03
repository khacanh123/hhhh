import * as types from '../action/constant';

const stateDefault = {
    count: 0,
    checking: false,
  }
  const check = (num) => {
    if(num % 2 === 0){
      return true;
    }else{
      return false;
    }
  }
  // pure reducer
  const countReducer = (state = stateDefault, action) => {
    switch (action.type) {
      case types.DECREMENT:
        return {
          ...state,
          count: action.val - 1
        }
      case types.INCREMENT:
        let chk = check(action.val+1);
        return {
          ...state,
          count: action.val + 1,
          checking: chk,
        }
      default:
        return state;
    }
  }
  
  export default countReducer;