import React from 'react';
import {Switch} from 'react-router';
import {Route} from 'react-router-dom';
import StockPage from './pages/stock';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import WelcomePage from './pages/welcome';
import SettingPage from './pages/settings';
import ReportPage from './pages/reports';

// eslint-disable-next-line no-undef
const  RoutesComponents=()=> {
       return ( 
           <Switch>
               {/* <Route exact path="/" component={StockPage}/> */}
               <Route exact path={'/'} exact component={WelcomePage } ></Route>
               <Route path={'/signup'} exact component={SignupPage } ></Route>
               <Route path={'/login'} exact component={LoginPage} ></Route>
               <Route path={'/stock'} exact component={StockPage}></Route>
               <Route path={'/settings'} exact component={SettingPage}></Route>
               <Route path={'/reports'} exact component={ReportPage}></Route>
           </Switch>
       );
   }

   export default RoutesComponents