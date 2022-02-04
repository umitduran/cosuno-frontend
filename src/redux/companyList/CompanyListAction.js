import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {GET_COMPANY_LIST} from './actionTypes';
import api from '../../api/api';

export const useGetCompanyList = () => {
  const dispatch = useDispatch();
  return useCallback(
    () =>
      dispatch({
        type: GET_COMPANY_LIST,
        payload: api.get(`/companies`),
      }),
    [dispatch]
  );
};
