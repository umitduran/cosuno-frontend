import {GET_SECTOR_LIST} from './actionTypes';

const initialState = {
  sectorList: [],
  isLoadingSector: false,
  hasErrorSector: false,
  isFulfilledSector: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_SECTOR_LIST}_PENDING`:
      return {
        ...state,
        isFulfilledSector: false,
        isLoadingSector: true,
        hasErrorSector: false,
        sectorList: [],
      };

    case `${GET_SECTOR_LIST}_FULFILLED`:
      return {
        isFulfilledSector: true,
        isLoadingSector: false,
        hasErrorSector: false,
        sectorList: action.payload.data,
      };

    case `${GET_SECTOR_LIST}_REJECTED`:
      return {
        isFulfilledSector: false,
        isLoadingSector: false,
        hasErrorSector: true,
        sectorList: [],
      };

    default:
      return state;
  }
};

export default reducer;
