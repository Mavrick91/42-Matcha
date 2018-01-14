import { SIGN_UP_USER } from '../../actions/signup/action_signup';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP_USER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
