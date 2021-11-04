import React, { useState } from 'react';
import sendAsync from '../../message-control/renderer';
import Header from '../../components/Header';



// eslint-disable-next-line no-undef
const  Stock =()=> {
    const [message, setMessage] = useState('SELECT * FROM repositories');
    const [response, setResponse] = useState();

    function send(sql) {
        sendAsync(sql).then((result) => setResponse(result));
    }

    return (
        <>
        <Header role="Admin"/>
        <div className="App">
            
            <header className="App-header">
                <h1>
                    Standalone application with Electron, React, and
                    SQLite stack.
                </h1>
            </header>
            <article>
                <p>
                    Say <i>ping</i> to the main process.
                </p>
                <input
                    type="text"
                    value={message}
                    onChange={({ target: { value } }) => setMessage(value)}
                />
                <button type="button" onClick={() => send(message)}>
                    Send
                </button>
                <br />
                <p>Main process responses:</p>
                <br />
                <pre>
                    {(response && JSON.stringify(response, null, 2)) ||
                        'No query results yet!'}
                </pre>
            </article>
        </div>
        </>
    );
}
export default Stock