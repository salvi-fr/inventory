// import { toast } from 'react-toastify';
import * as StockAction from './actions';
import sendAsync from '../../../message-control/renderer';

export const getStockinNumber = ()=> (dispatch) => {
  dispatch(StockAction.createStockinPending());
  return  sendAsync(`SELECT COUNT(*) as count  from STOCK WHERE status= "in_stock"`)
  .then((result) => {
    console.log('get in stock',result)
    if (result.length<=0) {
      console.log('get in stock is bad',result)
      return dispatch(StockAction.fetchStockinError("no user found"))
    }
    console.log('get in stock',result)
    return dispatch(StockAction.getStockinNumber(result[0].count))})
   .catch((error) => dispatch(StockAction.fetchStockinError(error)));
};
export const getStockins = ()=> (dispatch) => {
  console.log('get stockins')
  dispatch(StockAction.fetchStockinPending());
  return  sendAsync(`SELECT * from STOCK`)
  .then((result) => {
    console.log('get ins stocks',result)
    if (result.length<=0) {
      console.log('get in stocks is bad',result)
      return dispatch(StockAction.fetchStockinError("no user found"))
    }
    console.log('get in stocks',result)
    return dispatch(StockAction.fetchStockinSuccess(result))})
   .catch((error) => dispatch(StockAction.fetchStockinError(error)));
};
export const getStockouts = ()=> (dispatch) => {
  dispatch(StockAction.fetchStockoutPending());
  return  sendAsync(`SELECT * from STOCKOUT`)
  .then((result) => {
    console.log('get in stock',result)
    if (result.length<=0) {
      console.log('get in stock is bad',result)
      return dispatch(StockAction.fetchStockoutError("no user found"))
    }
    console.log('get in stock',result)
    return dispatch(StockAction.fetchStockoutSuccess(result))})
   .catch((error) => dispatch(StockAction.fetchStockinError(error)));
};
export const getStockreturns = ()=> (dispatch) => {
  dispatch(StockAction.fetchStockoutPending());
  return  sendAsync(`SELECT * from STOCKOUT`)
  .then((result) => {
    console.log('get in stock',result)
    if (result.length<=0) {
      console.log('get in stock is bad',result)
      return dispatch(StockAction.fetchStockoutError("no user found"))
    }
    console.log('get in stock',result)
    return dispatch(StockAction.fetchStockoutSuccess(result))})
   .catch((error) => dispatch(StockAction.fetchStockinError(error)));
};
export const getStockoutNumber = () => (dispatch) => {
  return  sendAsync('SELECT COUNT(*) as count  from STOCKOUT')
  .then((result) => {
    if (result.length<=0) {
      console.log('outstock bad',result)
      return dispatch(StockAction.fetchStockinError("no user found"))
    }
    console.log('get out stock',result)
    return dispatch(StockAction.getStockoutNumber (result[0].count))})
   .catch((error) => dispatch(StockAction.fetchStockinError(error)));
};


export const getStockreturnNumber = () => (dispatch) => {
  return  sendAsync('SELECT COUNT(*) as count from STOCKRETURN')
  .then((result) => {
    if (result.length<=0) {
      console.log('get return stock  bad',result)
      return dispatch(StockAction.fetchStockinError("no user found"))
    }
    console.log('get return stock',result)
    return dispatch(StockAction.getStockreturnNumber(result[0].count))})
   .catch((error) => dispatch(StockAction.fetchStockinError(error)));
};


// export const login = (user) => (dispatch) => {

//   dispatch(StockAction.loginPending());
//   return  sendAsync(`Select * from USER where Username="${user.username}" AND password ="${user.password}"`)
//   .then((result) => {
//     if (result.length<=0) {
//       console.log('result is bad',result)
//       return dispatch(StockAction.loginError("no user found"))
//     }
//     console.log('res',result)
//     return dispatch(StockAction.loginSuccess(result))})
//    .catch((error) => dispatch(StockAction.loginError(error)));
// };

// export const signup = (signupuser) => (dispatch) => {
//   const user = localStorage.getItem('user');
//   console.log('In profile action')
// if(!user || user.role !=="admin") return StockAction.signupError('No Privillage');
// const q = `INSERT INTO USER (username,password,role) VALUES ("${signupuser.username}","${signupuser.password}","${signupuser.role}")`;
//   dispatch(StockAction.signupPending());
//   return  sendAsync(q)
//   .then((result) => {
//     if (result.length<=0) {
//       console.log('result is bad',result)
//       return dispatch(StockAction.signupError("Create usr error"))
//     }
//     console.log('res',result)
//     return dispatch(StockAction.signupSuccess(result))})
//    .catch((error) => dispatch(StockAction.signupError(error)));
// };