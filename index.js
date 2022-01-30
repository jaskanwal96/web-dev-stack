import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [count, setCount] = React.useState(0)
    return (
        React.createElement('div', {},   [
            React.createElement('button', {
                onClick: () => setCount(count + 1),
                key: 'the-button',
                className: 'the-button__class',
            }, 'Increment'),
            React.createElement('h1', {
                key: 'the-h1',
                className: 'the-heading__class',
            }, count)
        ])
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));