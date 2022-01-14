import { combineReducers } from "redux";
import userDetail from "../../Store/Reducers/User/index";

export default combineReducers({
  userDetail: userDetail,
});
