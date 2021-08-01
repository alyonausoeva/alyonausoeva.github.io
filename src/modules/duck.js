import * as constants from "./constants";
import { getRows } from "./api";

// Action creators
export const fetchDataSuccess = (payload) => ({
  type: constants.FETCH_DATA_SUCCESS,
  payload,
});

export const fetchDataError = (payload) => ({
  type: constants.FETCH_DATA_ERROR,
  payload,
});

// Reducers
const data = (state = null, action) => {
  switch (action.type) {
    case constants.FETCH_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

// Thunks
export const fetchData = (index) => async (dispatch) => {
  try {
    const res = await getRows();
    dispatch(fetchDataSuccess(res[index].progress));
  } catch (err) {
    dispatch(fetchDataError(err));
  }
};

export default data;
