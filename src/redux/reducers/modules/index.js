import * as actions from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const ModuleReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case actions.CREATE_MODULES_SUCCESS:
      return {
        ...state,
        module:action.payload,
        moduleloading:false
      };
      case actions.CREATE_MODULES_PENDING:
        return {
          ...state,
        moduleloading:true
        };
    case actions.CREATE_MODULES_ERROR:
      return {
        ...state,
        moduleError:action.payload,
        moduleloading:false
      };
      case actions.UPDATE_MODULES_SUCCESS:
        return {
          ...state,
          module:action.payload,
          moduleloading:false
        };
        case actions.UPDATE_MODULES_PENDING:
          return {
            ...state,
            moduleloading:true
          };
      case actions.UPDATE_MODULES_ERROR:
        return {
          ...state,
          moduleError:action.payload,
         moduleloading:false
        };
 case actions.FETCH_MODULES_SUCCESS:
        return {
          ...state,
          modules: action.payload,
        };
        case actions.FETCH_MODULES_PENDING:
          return {
            ...state,
            moduleloading:true
          };
      case actions.FETCH_MODULES_ERROR:
        return {
          ...state,
          moduleError:action.payload,
          moduleloading:false
        };
    default:
      return state;
  }
};

export default ModuleReducer;

