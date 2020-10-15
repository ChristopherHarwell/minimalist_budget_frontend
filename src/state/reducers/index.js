import {
  FETCH_BUDGET_START,
  FETCH_BUDGET_SUCCESS,
  FETCH_BUDGET_FAILURE,
} from "../actions";

const initialState = {
  budget: [], // change this property to your initial state and value for that state
  error: "",
  isFetching: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BUDGET_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_BUDGET_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        budget: action.payload, // change this property to your state property
      };
    case FETCH_BUDGET_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default reducer;
