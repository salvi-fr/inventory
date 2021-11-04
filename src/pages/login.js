import React, { useState } from 'react';
import sendAsync from '../message-control/renderer';
import {UserHeader} from '../components/Header';

import {Form, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {addNewEmp} from '../allactions';

const Signup =(props)=> {
const [user, setUser] = useState( {
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    city: ''
});
const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
        ...prevState,
        [name]: value
    }));
};
const handleSubmit=()=>{
   let formdata = {
       firstname: user.firstname,
       lastname: user.lastname,
       email: user.email,
       mobile: user.mobile,
       city: user.city
   };
   props.addNewEmp(formdata);
   console.log("submitted",formdata);
   setUser({
       firstname: '',
       lastname: '',
       email: '',
       mobile: '',
       city: ''
   });
}
       return (
           <>
            <UserHeader/>
           <div className="col-md-4 offset-md-4">
           <Form>
           <h2 style={{"textAlign":"center", "marginTop":"20px"}}>Enter Employee Details</h2>
                   <hr/>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" 
       onChange={e => {
        setUser(e);
    }}
    value = {user.email}
    name="email"
    placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    placeholder="Password" 
    name="password"
    onChange={e => {
        setUser(e);
    }}
    value = {user.password}
    />
  </Form.Group>
  <Button onClick={handleSubmit}>Login </Button>
  
</Form>
           </div>
           </>
        );
   }

   export default  Signup
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({addNewEmp},dispatch)
// }
// export default connect (null, mapDispatchToProps)( Signup)

// eslint-disable-next-line no-undef
// const  Stock =()=> {
//     const [message, setMessage] = useState('SELECT * FROM repositories');
//     const [response, setResponse] = useState();

//     function send(sql) {
//         sendAsync(sql).then((result) => setResponse(result));
//     }

//     return (
//         <>
//         <UserHeader/>
//         <div className="App">
            
//             <header className="App-header">
//                 <h1>
//                     Signup
//                 </h1>
//             </header>
//             <article>
//                 <p>
//                     Say <i>ping</i> to the main process.
//                 </p>
//                 <input
//                     type="text"
//                     value={message}
//                     onChange={({ target: { value } }) => setMessage(value)}
//                 />
//                 <button type="button" onClick={() => send(message)}>
//                     Send
//                 </button>
//                 <br />
//                 <p>Main process responses:</p>
//                 <br />
//                 <pre>
//                     {(response && JSON.stringify(response, null, 2)) ||
//                         'No query results yet!'}
//                 </pre>
//             </article>
//         </div>
//         </>
//     );
// }
// export default Stock