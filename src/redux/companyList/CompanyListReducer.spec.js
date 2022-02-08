import {GET_COMPANY_LIST} from './actionTypes';
import CompanyListReducer from './CompanyListReducer';

describe('redux > companyList > RandomReducer', () => {
  it('returns initial state, if non matched action is dispatched', () => {
    const initialState = {
      isLoading: false,
      hasError: false,
      isFulfilled: false,
    };

    const action = {
      type: 'FOO',
    };

    expect(CompanyListReducer(initialState, action)).toBe(initialState);
  });

  it.each([
    [`${GET_COMPANY_LIST}_FULFILLED`],
    [`${GET_COMPANY_LIST}_PENDING`],
    [`${GET_COMPANY_LIST}_REJECTED`],
  ])(`updates state according to dispatched action`, actionType => {
    const initialState = {
      personList: [],
    };

    const payload =
      actionType === `${GET_COMPANY_LIST}_FULFILLED`
        ? {
            data: {
              companyList: [
                {
                  _id: '61f834aefa65383a3c5c30e7',
                  logo: 'http://placehold.it/32x32',
                  name: 'NURPLEX',
                  specialities: [
                    {
                      id: 1,
                      name: 'Commercial',
                    },
                  ],
                  city: 'Bayview',
                },
                {
                  _id: '61f834aeea9e019a33d50b15',
                  logo: 'http://placehold.it/32x32',
                  name: 'MATRIXITY',
                  specialities: [
                    {
                      id: 1,
                      name: 'Commercial',
                    },
                  ],
                  city: 'Rose',
                },
              ],
            },
          }
        : undefined;

    const action = {
      type: actionType,
      payload,
    };

    expect(CompanyListReducer(initialState, action)).toMatchSnapshot();
  });
});
