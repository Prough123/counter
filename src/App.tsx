import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settigns from "./components/Settings/Settings";


function App() {
    return (
        <div className="App">
            <Counter/>
            <Settigns/>
        </div>
    );
}

export default App;
