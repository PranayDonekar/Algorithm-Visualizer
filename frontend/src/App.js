import React from 'react';
import SortingVisualizer from './components/SortingVisualizer';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Algorithm Visualizer</h1>
            </header>
            <main>
                <SortingVisualizer />
            </main>
        </div>
    );
}

export default App;
