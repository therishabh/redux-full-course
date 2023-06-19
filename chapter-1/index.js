// const redux = require("redux");
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// initial state
const initialState = {
  amount: 100,
};

// action name constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_BY_AMOUNT = "INCREMENT_BY_AMOUNT";
const DECREMENT_BY_AMOUNT = "DECREMENT_BY_AMOUNT";

const store = createStore(reducer, applyMiddleware(logger.default));

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        amount: state.amount + 1,
      };

    case DECREMENT:
      return {
        ...state,
        amount: state.amount - 1,
      };

    case INCREMENT_BY_AMOUNT:
      return {
        ...state,
        amount: state.amount + action.payload,
      };

    case DECREMENT_BY_AMOUNT:
      return {
        ...state,
        amount: state.amount - action.payload,
      };

    default:
      return state;
  }
}

// actions
const incrementAmount = function () {
  return {
    type: INCREMENT,
  };
};

const decrementAmount = () => {
  return {
    type: DECREMENT,
  };
};

const incrementAmountByValue = (value) => {
  return {
    type: INCREMENT_BY_AMOUNT,
    payload: value,
  };
};

const decrementAmountByValue = (value) => {
  return {
    type: DECREMENT_BY_AMOUNT,
    payload: value,
  };
};

///////////////////////////////////////////////////////

// store.subscribe(() => {
//   console.log(store.getState());
// });

store.dispatch(incrementAmount());
store.dispatch(decrementAmount());
store.dispatch(incrementAmount());
store.dispatch(incrementAmount());
store.dispatch(incrementAmountByValue(200));
store.dispatch(incrementAmount());
store.dispatch(decrementAmountByValue(30));
store.dispatch(decrementAmount());
