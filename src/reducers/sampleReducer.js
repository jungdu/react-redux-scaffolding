import { SAMPLE_TYPE } from "../actions/type";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_TYPE:
      return { ...state };
    default:
      return state;
  }
};
