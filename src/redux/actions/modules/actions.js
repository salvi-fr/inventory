import * as actionType from '../actionTypes';

export function fetchModulesPending() {
  console.log("pending")
  return {
    type: actionType.FETCH_MODULES_PENDING,
  };
}

export function fetchModulesSuccess(payload) {
  console.log("success")
  return {
    type: actionType.FETCH_MODULES_SUCCESS,
    payload,
  };
}

export function fetchModulesError(payload) {
  console.log("payload", payload)
  return {
    type: actionType.FETCH_MODULES_ERROR,
    payload,
  };
}

export function fetchProfilePending() {
  console.log("pending")
  return {
    type: actionType.FETCH_PROFILE_PENDING,
  };
}

export function fetchProfileSuccess(payload) {
  console.log("success")
  return {
    type: actionType.FETCH_PROFILE_SUCCESS,
    payload,
  };
}

export function fetchProfileError(payload) {
  console.log("payload", payload)
  return {
    type: actionType.FETCH_PROFILE_ERROR,
    payload,
  };
}


export function loginPending() {
  console.log("pending")
  return {
    type: actionType.LOGIN_PENDING,
  };
}

export function loginSuccess(payload) {
  console.log("success" ,payload)
  return {
    type: actionType.LOGIN_SUCCESS,
    payload,
  };
}

export function loginError(payload) {
  console.log("payload", payload)
  return {
    type: actionType.LOGIN_ERROR,
    payload,
  };
}

export function signupPending() {
  console.log("pending")
  return {
    type: actionType.SIGNUP_PENDING,
  };
}

export function signupSuccess(payload) {
  console.log("success")
  return {
    type: actionType.SIGNUP_SUCCESS,
    payload,
  };
}

export function signupError(payload) {
  console.log("payload", payload)
  return {
    type: actionType.SIGNUP_ERROR,
    payload,
  };
}


