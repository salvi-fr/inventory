// import { toast } from 'react-toastify';
import * as UserAction from './actions';
import sendAsync from '../../../message-control/renderer';

export const fetchProfile = () => (dispatch) => {
  // const user = localStorage.getItem('user');
  // console.log('In profile action')
// if(!user) return UserAction.fetchProfileError('No user found');
  dispatch(UserAction.fetchProfilePending());
  // return  sendAsync(`Select * from USER where Username="${user.username}" AND password ="${user.password}"`)
  return  sendAsync(`Select * from USER where Username="admin" AND password ="Admi@12345"`)
  .then((result) => {
    if (result.length<=0) {
      console.log('result is bad',result)
      return dispatch(UserAction.fetchProfileError("no user found"))
    }
    console.log('res',result)
    return dispatch(UserAction.fetchProfileSuccess(result))})
   .catch((error) => dispatch(UserAction.fetchProfileError(error)));
};


export const login = (user) => (dispatch) => {

  dispatch(UserAction.loginPending());
  return  sendAsync(`Select * from USER where Username="${user.username}" AND password ="${user.password}"`)
  .then((result) => {
    if (result.length<=0) {
      return dispatch(UserAction.loginError("no user found"))
    }
    console.log('login success ',result[0].ROLE)
    localStorage.setItem('user',result[0]);
    console.log(localStorage.getItem('user'))
    return dispatch(UserAction.loginSuccess(result[0]))})
   .catch((error) => dispatch(UserAction.loginError(error)));
};

export const signup = (signupuser) => (dispatch) => {
  const user = localStorage.getItem('user');
  console.log('In profile action')
if(!user || user.role !=="admin") return UserAction.signupError('No Privillage');
const q = `INSERT INTO USER (username,password,role) VALUES ("${signupuser.username}","${signupuser.password}","${signupuser.role}")`;
  dispatch(UserAction.signupPending());
  return  sendAsync(q)
  .then((result) => {
    if (result.length<=0) {
      console.log('result is bad',result)
      return dispatch(UserAction.signupError("Create usr error"))
    }
    console.log('res',result)
    return dispatch(UserAction.signupSuccess(result))})
   .catch((error) => dispatch(UserAction.signupError(error)));
};

export const getUsers = () => (dispatch) => {
  // const user = localStorage.getItem('user');
  // console.log('In profile action',user.ROLE,user[0])
// if(!user || user.ROLE !=="admin") return UserAction.fetchUsersError('No Privillage');
const q = `SELECT * FROM USER`;
  dispatch(UserAction.fetchUsersPending());
  return  sendAsync(q)
  .then((result) => {
    if (result.length<=0) {
      console.log('result is bad',result)
      return dispatch(UserAction.fetchUsersError("Create usr error"))
    }
    console.log('res',result)
    return dispatch(UserAction.fetchUsersSuccess(result))})
   .catch((error) => dispatch(UserAction.fetchUsersError(error)));
};
