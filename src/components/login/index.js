import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import sendAsync from '../../message-control/renderer';
import commonStyle from '../common/common.scss';
import TextInput from '../common/textInput';
import SubmitButton from '../common/submitButton';
import OrLine from '../common/orLine';
import * as  userActions from '../../redux/actions/user';
import loginValidation from './loginValidation';


const Login =(props)=> {
const [state, setState]= useState ({
    username: '',
    password: '',
    error: '',
    loading: false,
  })
  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
  
    setState((state) => {
      return {
        ...state,   // Spread Operator               
        [name]: value
      }
    })
  }
  useEffect (()=>{
  console.log('props in useaffect',props)
  },[props])

  const onSubmit = (event) => {
    console.log('onSubmit',state);
    event.preventDefault();
    const {username, password } = state;
    const checkErrors = loginValidation({username,password});
    if (checkErrors) {
      console.log("error found",checkErrors.details)
      const errors = {};
      (checkErrors.details || []).forEach((err) => {
        errors[err.path[0]] = err.message.replace(/"/g, '');
      });
      const errorValue = Object.values(errors);
      setState((prevState) => ({ ...prevState, error: errorValue[0] }));
      return false;
    }
    setState((prevState) => ({ ...prevState, loading: true }));
   console.log("about to create a querry")
      sendAsync(`Select * from USER where Username="${username}" AND password ="${password}"`).then((result) => {
      setState((prevState) => ({ ...prevState, loading: false }))
      console.log('res',result)});
      console.log(props.userActions)
      props.loginAction({username,password})
  
    return setState({
      error: '',
    });
  };
    const {
      username, password, error, loading,
    } = state;
    const { location, isLoggedIn} = props;
    if (isLoggedIn) {
      return (
        <Redirect
          to={
            location.state
              ? { pathname: location.state.from.pathname }
              : {
                pathname: '/',
              }
          }
        />
      );
    }
    return (
      <div className="container registration" style={commonStyle}>
        {/* <ToastContainer position={toast.POSITION.TOP_RIGHT} /> */}
        <div className="row registration--middle-row">
          <div className="col-md-7 registration--middle-row__left-part">
            <div className="registration__form-div">
              <form
                id="login-form"
                className={classnames('ui', 'form', { loading })}
                onSubmit={onSubmit}
              >
                <TextInput
                  type="text"
                  label="Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  error={error}
                />
                <TextInput
                  type="password"
                  label="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  error={error}
                />
                <SubmitButton value="Login" />
              </form>
           
            </div>
            <OrLine />
          </div>
          <div className="col-md-5 registration--middle-row__right-part">
          <br/>
              if you don't have an account! <a href="/signup" alignItems="Center">Signup!</a>
              <br/>
              <a href="/reset">Forgot password ?</a>
            
          </div>
        </div>
        <div className="row registration-footer-row">
          <div className="col-md-12 registration--footer" />
        </div>
      </div>
    );
  }


Login.propTypes = {
  loginAction: PropTypes.func.isRequired,
  isLoggedIn:PropTypes.bool, 
  profile:PropTypes.object,
  authError:PropTypes.object,
};
Login.defaultProps = {
  isLoggedIn:false,
  authError:null, 
  profile:{},
  userActions: () => {},
};
export const mapStateToProps = ({ auth
  :{ isLoggedIn,loading, profile,authError} 
}) => ({
  isLoggedIn,
  authError,
  loading,
  profile,
});
export const mapDispatchToProps = (dispatch) => ({
    loginAction: bindActionCreators(userActions.login, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
