import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './navbar.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Nav, NavDropdown, Navbar, Image, Container,
} from 'react-bootstrap';
import * as profileActions from '../../../redux/actions/user';




/**
 *
 *
 * @class NavBar
 * @param {object} props
 * @extends {React.Component}
 */

export const  NavBar=(props)=> {

useEffect(() => {
  // if (!localStorage.getItem('token')) return;
  console.log("actions",props.actions.fetchProfile)
  props.actions.fetchProfile();
    //  this.intervalId = setInterval(() => this.props.actions.getNotifications(), 1000);
},[])
useEffect(() => {
 //  if (nextProps.notifications !== notifications && nextProps.notifications.status === 'success') {
 //    this.setState({ notifications: nextProps.notifications });
 //  }
},[props])
     const { auth } = props;
     const isLoggedIn=false;
     const profile ={}
    //  const { isLoggedIn, profile } = auth;

     return (
       <>

         <Navbar fixed="top" collapseOnSelect expand="lg" bg="transparent" variant="light" sticky="top">
           
             <a href="/">
             <Navbar.Brand>
             {/* <Logo /> */}
             E Stock
           </Navbar.Brand>
               
              </a>
            
           <Container>
             {/* <div style={{ width: '20rem' }}><Search /></div> */}
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse className="justify-content-end">
               {isLoggedIn
                 ? (
                   <>
                     <Nav.Link>
                       <NavDropdown

                         title={(
                           <div>
                             <i className="far fa-bell" />

                             {1 !== 0 ? <span className="badge badge-danger dropdown-toggle">1</span> : ''}
                           </div>
                    )}
                         id="collasible-nav-dropdown"
                       >
                         {' '}

                         {/* { data.length !== 0 ? (data.map((notification) => (
                           <p onClick={() => this.handleNotifications(notification.id, notification.articleSlug)} style={{ cursor: 'pointer' }}>
                             <NavDropdown.Item style={{ fontSize: '10px' }}>
                               {notification.read === false
                                 ? (<b>{notification.message}</b>) : (notification.message)}
                             </NavDropdown.Item>
                           </p>
                         ))) : (
                           <NavDropdown.Item>
                        No notifications yet!
                           </NavDropdown.Item>
                         )} */}
                       </NavDropdown>
                     </Nav.Link>
                     <NavDropdown
                       title={(
                         <div xs={6} md={4}>
                           {profile.image ? (<Image src={profile.image} roundedCircle width="40" height="40" />) : (profile.username)}

                         </div>
                    )}
                       id="collasible-nav-dropdown"
                     >
                       {' '}
                       <NavDropdown.Item href="/profile">
                        Profile
                       </NavDropdown.Item>
                       <NavDropdown.Item href="/articles/create">
                        New Article
                       </NavDropdown.Item>
                       <NavDropdown.Divider />
                       <NavDropdown.Item
                         onClick={() => {
                         }}
                         href="/bookmarks"
                       >
                        Bookmarks
                       </NavDropdown.Item>
                       <NavDropdown.Item
                         onClick={() => {
                         }}
                         href="/logout"
                       >
                        Logout
                       </NavDropdown.Item>
                     </NavDropdown>
                   </>
                 )
                 : (
                   <>
                     <Nav.Link href="/stock">
                    Stock
                     </Nav.Link>
                     <Nav.Link href="/returns">
                    Return 
                     </Nav.Link>
                     <Nav.Link href="/reports">
                    Report 
                     </Nav.Link>
                     <Nav.Link href="/settings">
                    Settings
                     </Nav.Link>
                     <Nav.Link href="/login">
                    login
                     </Nav.Link>
                     <Nav.Link className=" btn btn-outline-primary" href="/signup">
                    Get Started
                     </Nav.Link>
                   </>
                 )}
             </Navbar.Collapse>
           </Container>
         </Navbar>
       </>
     );
   }
NavBar.defaultProps = {
  auth: null,
};
NavBar.propTypes = {
  auth: PropTypes.object,
  actions: PropTypes.object.isRequired,
};
export const mapStateToProps = ({ auth }) => (
  {
   auth,
  }
);
export const mapDispatchToProps = (dispatch) => ({
  actions: {
    fetchProfile: bindActionCreators(profileActions.fetchProfile, dispatch),
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
