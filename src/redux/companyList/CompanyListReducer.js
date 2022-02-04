import {GET_COMPANY_LIST} from './actionTypes';

const initialState = {
  companyList: [],
  isLoading: false,
  hasError: false,
  isFulfilled: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_COMPANY_LIST}_PENDING`:
      return {
        ...state,
        isFulfilled: false,
        isLoading: true,
        hasError: false,
        companyList: [],
      };

    case `${GET_COMPANY_LIST}_FULFILLED`:
      return {
        isFulfilled: true,
        isLoading: false,
        hasError: false,
        companyList: action.payload.data,
      };

    case `${GET_COMPANY_LIST}_REJECTED`:
      return {
        isFulfilled: false,
        isLoading: false,
        hasError: true,
        companyList: [],
      };

    default:
      return state;
  }
};

export default reducer;
