import {FETCH_USER} from '../../Actions/UserInfo/index';

const initialState = {
  userDetail: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        userDetail: action.userDetail,
      };

    default:
      return state;
  }
};
