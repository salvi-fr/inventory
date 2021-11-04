import React, { useState } from 'react';
import sendAsync from './message-control/renderer';
import Header from './components/Header';
import Routes from './Routes';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
    const [message, setMessage] = useState('SELECT * FROM repositories');
    const [response, setResponse] = useState();

    function send(sql) {
        sendAsync(sql).then((result) => setResponse(result));
    }

    return (
        <Router>
            <Routes />
            </Router>
    );
}

export default App;
