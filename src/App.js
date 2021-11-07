import React, { useState } from 'react';
import sendAsync from './message-control/renderer';
import Header from './components/Header';
import Routes from './Routes';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/common/navbar/navbar';
import Footer from './components/common/footer/Footer';
function App() {
    const [message, setMessage] = useState('SELECT * FROM repositories');
    const [response, setResponse] = useState();

    function send(sql) {
        sendAsync(sql).then((result) => setResponse(result));
    }

    return (
        <>
        <BrowserRouter>
        <Router>
        <NavBar />
            <Routes />
            </Router>
            </BrowserRouter>
             {/* <Footer /> */}
             </>
    );
}

export default App;
