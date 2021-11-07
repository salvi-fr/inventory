import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import classnames from 'classnames';
import commonStyle from '../common/common.scss';
import TextInput from '../common/textInput';
import SubmitButton from '../common/submitButton';
import OrLine from '../common/orLine';
// import SwitchToSignupOrLogin from '../common/switchToSignupOrLogin';
// import loginAction from '../../redux/actions/login';
import loginValidation from './loginValidation';
// import signupSvgPath from '../../../public/assets/images/signupSvg.svg';
// import SocialButtons from '../SocialButtons/SocialButton';

const Login =(props)=> {
const [state, setState]= useState ({
    email: '',
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
// useEffect
//   UNSAFE_componentWillReceiveProps(nextProps) {
//     setState((prevState) => ({ ...prevState, error: nextProps.message }));
//   }

  const onSubmit = (event) => {
    event.preventDefault();
    const re = /[A-Z0-9]+@[A-Z0-9-]+\.[A-Z]{2,4}/gim;
    const {email, password } = state;
    const isEmail = re.test(email);
  
    if (!isEmail) {
      
    } 
    const checkErrors = loginValidation(state);
    if (checkErrors) {
      const errors = {};
      (checkErrors.details || []).forEach((err) => {
        errors[err.path[0]] = err.message.replace(/"/g, '');
      });
      const errorValue = Object.values(errors);
      setState((prevState) => ({ ...prevState, error: errorValue[0] }));
      return false;
    }
    setState((prevState) => ({ ...prevState, loading: true }));
  
    // props.loginAction(formData).then((res) => {
    //   if (res.payload.status !== 200) {
    //     setState({
    //       loading: false,
    //     });
    //   }
    // });
    return setState({
      error: '',
    });
  };

  const onChange = ({ target }) => {
    // setState((prevState) => ({ ...prevState, error: '' }));
    // const input = { [target.name]: target.value };
    // setState((prevState) => ({ ...prevState, ...input }));
  };


    const {
      email, password, error, loading,
    } = state;
    const { location, message, status } = props;
    // if (status === 200) {
    //   return (
    //     <Redirect
    //       to={
    //         location.state
    //           ? { pathname: location.state.from.pathname }
    //           : {
    //             pathname: '/',
    //             state: { message },
    //           }
    //       }
    //     />
    //   );
    // }
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
                  type="email"
                  label="Username"
                  name="email"
                  value={email}
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
  export default Login;
// }
// Login.propTypes = {
//   loginAction: PropTypes.func,
//   status: PropTypes.number,
//   message: PropTypes.string,
// };
// Login.defaultProps = {
//   status: 0,
//   message: '',
//   loginAction: () => {},
// };
// export const mapStateToProps = ({ user: { message, status, token } }) => ({
//   message,
//   status,
//   token,
// });
// export default connect(
//   mapStateToProps,
//   { loginAction },
// )(Login);
