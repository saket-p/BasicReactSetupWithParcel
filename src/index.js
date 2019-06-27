import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

function run() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(run, 1000);
})