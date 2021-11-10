import * as actionTypes from '../actionTypes';

  export const createStockoutPending = () => ({
    type: actionTypes.CREATE_STOCKOUT_PENDING,  
});
export const createStockoutSucecess= (payload) => ({
    type: actionTypes.CREATE_STOCKOUT_SUCCESS,
    payload,
});
export const createStockoutError = (payload) => ({
    type: actionTypes.CREATE_STOCKOUT_ERROR,
    payload,
});
export const fetchStockoutSuccess= (payload) => ({
    type: actionTypes.FETCH_STOCKOUT_SUCCESS,
     payload,
});
export const fetchStockoutError = (payload) => ({
    type: actionTypes.FETCH_STOCKOUT_FAILURE,
    payload,
});
export const fetchStockoutPending = () => ({
    type: actionTypes.FETCH_STOCKOUT_LOADING,
});
export const deleteStockoutError = (payload) => ({
    type: actionTypes.DELETE_STOCKOUT_FAIL,
    payload,
});
export const deleteStockoutSucecess = (payload) => ({
    type: actionTypes.DELETE_STOCKOUT_SUCCESS,
     payload,
});
export const deleteStockoutLoading = () => ({
    type: actionTypes.DELETE_STOCKOUT_LOADING,
});
export const updateStockoutSucecess = (payload) => ({
    type: actionTypes.UPDATE_STOCKOUT_SUCCESS,
    payload,
});
export const updateStockoutError = (payload) => ({
    type: actionTypes.UPDATE_STOCKOUT_ERROR,
    payload,
});
export const updateStockoutLoading = () => ({
    type: actionTypes.UPDATE_STOCKOUT_PENDING,
});
export const createStockinPending = () => ({
    type: actionTypes.CREATE_STOCKIN_PENDING,
});
export const createStockinSuccess = (payload) => ({
    type: actionTypes.CREATE_STOCKIN_SUCCESS,
     payload,
});
export const createStockinError = (payload) => ({
    type: actionTypes.CREATE_STOCKIN_ERROR,
     payload,
});
export const fetchStockinSuccess= (payload) => ({
    type: actionTypes.FETCH_STOCKIN_SUCCESS,
     payload,
});
export const fetchStockinError = (payload) => ({
    type: actionTypes.FETCH_STOCKIN_FAILURE,
    payload,
});
export const fetchStockinPending = () => ({
    type: actionTypes.FETCH_STOCKIN_LOADING,
});
export const deleteStockinError= (payload) => ({
    type: actionTypes.DELETE_STOCKIN_FAIL,
     payload,
});
export const deleteStockinSuccess = (payload) => ({
    type: actionTypes.DELETE_STOCKIN_SUCCESS,
    payload,
});
export const deleteStockPending = () => ({
    type: actionTypes.DELETE_STOCKIN_LOADING,
});
export const updateStockinSuccess = (payload) => ({
    type: actionTypes.UPDATE_STOCKIN_SUCCESS,
       payload,
});
export const updateeStockinErrror= (payload) => ({
    type: actionTypes.UPDATE_STOCKIN_ERROR,
    payload,
});
export const updateStockinPending = () => ({
    type: actionTypes.UPDATE_STOCKIN_PENDING,
});
export const createStockreturnPending= () => ({
    type: actionTypes.CREATE_STOCKRETURN_PENDING
});
export const createStockreturnSuccess = (payload) => ({
    type: actionTypes.CREATE_STOCKRETURN_SUCCESS,
      payload,
});
export const createStockreturnError = (payload) => ({
    type: actionTypes.CREATE_STOCKRETURN_ERROR,
     payload,
});
export const fetchStockreturnSuccess = (payload) => ({
    type: actionTypes.FETCH_STOCKRETURN_SUCCESS,
     payload,
});
export const feetchStockreturnError= (payload) => ({
    type: actionTypes.FETCH_STOCKRETURN_FAILURE,
    payload,
});
export const fetchStockreturnPending = (payload) => ({
    type: actionTypes.FETCH_STOCKRETURN_LOADING,
      payload,
});
export const deleteStockreturnError = (payload) => ({
    type: actionTypes.DELETE_STOCKRETURN_FAIL,
      payload,
});
export const deleteStockreturnSuccess = (payload) => ({
    type: actionTypes.DELETE_STOCKRETURN_SUCCESS,
     payload,
});
export const deleteStockreturnPending = (payload) => ({
    type: actionTypes.DELETE_STOCKRETURN_LOADING,
     payload,
});
export const updateStockreturnSuccess = (payload) => ({
    type: actionTypes.UPDATE_STOCKRETURN_SUCCESS,
     payload,
});
export const updateStockreturnError = (payload) => ({
    type: actionTypes.UPDATE_STOCKRETURN_ERROR,
      payload,
});
export const updateStockreturnPending = (payload) => ({
    type: actionTypes.UPDATE_STOCKRETURN_PENDING,
      payload,
});
export const getStockoutNumber = (payload) => ({
  type: actionTypes.GET_STOCKOUT_NUMBER_SUCCESS,
  payload,
});
export const getStockinNumber = (payload) => ({
  type: actionTypes.GET_STOCKIN_NUMBER_SUCCESS,
  payload,
});
export const getStockreturnNumber = (payload) => ({
  type: actionTypes.GET_STOCKRETURN_NUMBER_SUCCESS,
  payload,
});