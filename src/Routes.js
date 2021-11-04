import React from 'react';
import {Switch} from 'react-router';
import {Route} from 'react-router-dom';
import StockPage from './pages/stock';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import WelcomePage from './pages/welcome';

// eslint-disable-next-line no-undef
const  RoutesComponents=()=> {
       return ( 
           <Switch>
               <Route path={'/'} exact component={WelcomePage } ></Route>
               <Route path={'/signup'} exact component={SignupPage } ></Route>
               <Route path={'/login'} exact component={LoginPage} ></Route>
               <Route path={'/stock'} exact component={StockPage}></Route>
           </Switch>
       );
   }

   export default RoutesComponents