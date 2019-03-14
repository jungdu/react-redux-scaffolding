import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  sample: sampleReducer,
  form: formReducer
});
