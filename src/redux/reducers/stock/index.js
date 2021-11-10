import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const StockReducer = (state = initialState.stock, action) => {
  switch (action.type) {
    case actionTypes.CREATE_STOCKOUT_PENDING:
      return { ...state, loading: true };
    case actionTypes.CREATE_STOCKOUT_SUCCESS:
      return { ...state, loading: false, stockoutCreated: true, stockOut: action.payload };
    case actionTypes.CREATE_STOCKOUT_ERROR:
      return { ...state, loading: false, stockoutCreated: false, stockOutError: action.payload };
    case actionTypes.FETCH_STOCKOUT_SUCCESS:
      return { ...state, loading: false, stockOuts: action.payload };
    case actionTypes.FETCH_STOCKOUT_FAILURE:
      return { ...state, loading: false, srockOutError: action.payload };
    case actionTypes.FETCH_STOCKOUT_LOADING:
      return { ...state, loading: true };
    case actionTypes.DELETE_STOCKOUT_FAIL:
      return { ...state, loading: true, stockOutDeleted: false, stockOutError: action.payload };
    case actionTypes.DELETE_STOCKOUT_SUCCESS:
      return { ...state, loading: true, stockOutDeleted: true };
    case actionTypes.DELETE_STOCKOUT_LOADING:
      return { ...state, loading: true };
    case actionTypes.UPDATE_STOCKOUT_SUCCESS:
      return { ...state, loading: false, stockOutUpdated: true, stockOut: action.payload };
    case actionTypes.UPDATE_STOCKOUT_ERROR:
      return { ...state, loading: true, stockOutUpdated: false, stockOutError: action.payload };
    case actionTypes.UPDATE_STOCKOUT_PENDING:
      return { ...state, loading: true };

    case actionTypes.CREATE_STOCKIN_PENDING:
      return { ...state, loading: true };
    case actionTypes.CREATE_STOCKIN_SUCCESS:
      return { ...state, loading: false, stockInCreated: true, stockIn: action.payload };
    case actionTypes.CREATE_STOCKIN_ERROR:
      return { ...state, loading: false, stockoutCreated: false, stockInError: action.payload };
    case actionTypes.FETCH_STOCKIN_SUCCESS:
      return { ...state, loading: false, stockIns: action.payload };
    case actionTypes.FETCH_STOCKIN_FAILURE:
      return { ...state, loading: false, srockOutError: action.payload };
    case actionTypes.FETCH_STOCKIN_LOADING:
      return { ...state, loading: true };
    case actionTypes.DELETE_STOCKIN_FAIL:
      return { ...state, loading: true, stockInDeleted: false, stockInError: action.payload };
    case actionTypes.DELETE_STOCKIN_SUCCESS:
      return { ...state, loading: true, stockInDeleted: true };
    case actionTypes.DELETE_STOCKIN_LOADING:
      return { ...state, loading: true };
    case actionTypes.UPDATE_STOCKIN_SUCCESS:
      return { ...state, loading: false, stockInUpdated: true, stockIn: action.payload };
    case actionTypes.UPDATE_STOCKIN_ERROR:
      return { ...state, loading: true, stockInUpdated: false, stockInError: action.payload };
    case actionTypes.UPDATE_STOCKIN_PENDING:
      return { ...state, loading: true };

    case actionTypes.CREATE_STOCKRETURN_PENDING:
      return { ...state, loading: true };
    case actionTypes.CREATE_STOCKRETURN_SUCCESS:
      return { ...state, loading: false, stockReturnCreated: true, stockReturn: action.payload };
    case actionTypes.CREATE_STOCKRETURN_ERROR:
      return { ...state, loading: false, stockoutCreated: false, stockReturnError: action.payload };
    case actionTypes.FETCH_STOCKRETURN_SUCCESS:
      return { ...state, loading: false, stockReturns: action.payload };
    case actionTypes.FETCH_STOCKRETURN_FAILURE:
      return { ...state, loading: false, srockOutError: action.payload };
    case actionTypes.FETCH_STOCKRETURN_LOADING:
      return { ...state, loading: true };
    case actionTypes.DELETE_STOCKRETURN_FAIL:
      return { ...state, loading: true, stockReturnDeleted: false, stockReturnError: action.payload };
    case actionTypes.DELETE_STOCKRETURN_SUCCESS:
      return { ...state, loading: true, stockReturnDeleted: true };
    case actionTypes.DELETE_STOCKRETURN_LOADING:
      return { ...state, loading: true };
    case actionTypes.UPDATE_STOCKRETURN_SUCCESS:
      return { ...state, loading: false, stockReturnUpdated: true, stockReturn: action.payload };
    case actionTypes.UPDATE_STOCKRETURN_ERROR:
      return {
        ...state, loading: true,
        stockReturnUpdated: false, stockReturnError: action.payload
      };

    case actionTypes.GET_STOCKOUT_NUMBER_SUCCESS:
      return { ...state, stockoutNumber: action.payload };
    case actionTypes.GET_STOCKIN_NUMBER_SUCCESS:
      return { ...state, stockinNumber: action.payload };
    case actionTypes.GET_STOCKRETURN_NUMBER_SUCCESS:
      return { ...state, stockreturnNumber: action.payload };

    case actionTypes.UPDATE_STOCKRETURN_PENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
};


export default StockReducer;

