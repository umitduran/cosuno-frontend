import {useSelector} from 'react-redux';

export const useLoadingState = () => {
  const {isLoadingSector, hasErrorSector, isFulfilledSector} = useSelector(
    state => state.sector
  );
  return {isLoadingSector, hasErrorSector, isFulfilledSector};
};

export const useSectorList = () =>
  useSelector(state => state.sector.sectorList);
