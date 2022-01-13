import {combineReducers} from 'redux';
// import Products from './Products';
import userDetail from '../../Store/Reducers/User/index';

export default combineReducers({
  userDetail: userDetail,
});
