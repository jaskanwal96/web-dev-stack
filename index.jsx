import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [count, setCount] = React.useState(0)
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>{count}</h1>
        </>
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));