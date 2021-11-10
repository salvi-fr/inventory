// import { toast } from 'react-toastify';
import * as ModuleActions from './actions';
import sendAsync from '../../../message-control/renderer';


export const createModule = (user) => (dispatch) => {

  dispatch(ModuleActions.loginPending());
  return  sendAsync(`Select * from USER where Username="${user.username}" AND password ="${user.password}"`)
  .then((result) => {
    if (result.length<=0) {
      return dispatch(ModuleActions.loginError("no user found"))
    }
    console.log('login success ',result[0].ROLE)
    localStorage.setItem('user',result[0]);
    console.log(localStorage.getItem('user'))
    return dispatch(ModuleActions.loginSuccess(result[0]))})
   .catch((error) => dispatch(ModuleActions.loginError(error)));
};
export const deleteModule = (signupuser) => (dispatch) => {
  const user = localStorage.getItem('user');
  console.log('In profile action')
if(!user || user.role !=="admin") return ModuleActions.signupError('No Privillage');
const q = `INSERT INTO MODULE (username,password,role) VALUES ("${signupuser.username}","${signupuser.password}","${signupuser.role}")`;
  dispatch(ModuleActions.signupPending());
  return  sendAsync(q)
  .then((result) => {
    if (result.length<=0) {
      console.log('result is bad',result)
      return dispatch(ModuleActions.signupError("Create usr error"))
    }
    console.log('res',result)
    return dispatch(ModuleActions.signupSuccess(result))})
   .catch((error) => dispatch(ModuleActions.signupError(error)));
};

export const updateModule = (signupuser) => (dispatch) => {
  const user = localStorage.getItem('user');
  console.log('In profile action')
if(!user || user.role !=="admin") return ModuleActions.signupError('No Privillage');
const q = `INSERT INTO MODULE (username,password,role) VALUES ("${signupuser.username}","${signupuser.password}","${signupuser.role}")`;
  dispatch(ModuleActions.signupPending());
  return  sendAsync(q)
  .then((result) => {
    if (result.length<=0) {
      console.log('result is bad',result)
      return dispatch(ModuleActions.signupError("Create usr error"))
    }
    console.log('res',result)
    return dispatch(ModuleActions.signupSuccess(result))})
   .catch((error) => dispatch(ModuleActions.signupError(error)));
};

export const getModules = () => (dispatch) => {
  // const user = localStorage.getItem('user');
  // console.log('In profile action',user.ROLE,user[0])
// if(!user || user.ROLE !=="admin") return ModuleActions.fetchUsersError('No Privillage');
const q = `SELECT * FROM MODULE`;
  dispatch(ModuleActions.fetchUsersPending());
  return  sendAsync(q)
  .then((result) => {
    if (result.length<=0) {
      console.log('result is bad',result)
      return dispatch(ModuleActions.fetchUsersError("Create usr error"))
    }
    console.log('res',result)
    return dispatch(ModuleActions.fetchUsersSuccess(result))})
   .catch((error) => dispatch(ModuleActions.fetchUsersError(error)));
};
