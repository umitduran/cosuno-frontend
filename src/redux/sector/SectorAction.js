import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {GET_SECTOR_LIST} from './actionTypes';
import api from '../../api/api';

export const useGetSectorList = () => {
  const dispatch = useDispatch();
  return useCallback(
    () =>
      dispatch({
        type: GET_SECTOR_LIST,
        payload: api.get(`/sectors`),
      }),
    [dispatch]
  );
};
