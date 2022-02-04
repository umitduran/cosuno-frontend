import {useSelector} from 'react-redux';

export const useLoadingState = () => {
  const {isLoading, hasError, isFulfilled} = useSelector(state => state.company);
  return {isLoading, hasError, isFulfilled};
};

export const useCompanyList = () =>
  useSelector(state => state.company.companyList);
