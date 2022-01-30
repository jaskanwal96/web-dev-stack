import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [count, setCount] = React.useState(0);
    const oldCount: number = count;
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>{count}</h1>
            <h4>{oldCount}</h4>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));