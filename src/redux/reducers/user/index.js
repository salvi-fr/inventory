import * as actions from '../../actions/actionTypes';
import initialState from '../../store/initialState';


export const AuthReducer = (state = initialState.auth, action) => {
  switch (action.type) {
      case actions.LOGIN_SUCCESS:
        console.log('LOGIN_SUCCESS',action.payload);
        return {
          ...state,
          profile:action.payload,
          isLoggedIn: true,
          loading:false
        };
      case actions.LOGIN_ERROR:
        return {
          ...state,
          authError:action.payload,
          isLoggedIn: false,
          loading:false
        };
        case actions.LOGIN_PENDING:
          return {
            ...state,
          loading:true
          };
    default:
      return state;
  }
};


export const UserReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        useer:action.payload,
        isRegistered: true,
        loading:false
      };
      case actions.SIGNUP_PENDING:
        return {
          ...state,
        loading:true
        };
    case actions.SIGNUP_ERROR:
      return {
        ...state,
        userEerror:action.payload,
        isRegistered: false,
        loading:false
      };
 case actions.FETCH_USERS_SUCCESS:
        return {
          ...state,
          users: action.payload,
        };
        case actions.FETCH_USERS_PENDING:
          return {
            ...state,
          loading:true
          };
      case actions.FETCH_USERS_ERROR:
        return {
          ...state,
          userEerror:action.payload,
          isRegistered: false,
          loading:false
        };
    default:
      return state;
  }
};



