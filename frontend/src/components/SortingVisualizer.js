import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';
import { bubbleSort, quickSort, mergeSort, insertionSort } from './sortingAlgorithms'; // Ensure these imports are correct

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);
    const [timeComplexity, setTimeComplexity] = useState(0);

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 400) + 10);
        setArray(newArray);
    };

    const updateArray = (newArray) => {
        setArray(newArray);
    };

    const visualizeSort = (algorithm) => {
        switch (algorithm) {
            case 'bubbleSort':
                bubbleSort(array.slice(), updateArray, setTimeComplexity);
                break;
            case 'quickSort':
                quickSort(array.slice(), updateArray, setTimeComplexity);
                break;
            case 'mergeSort':
                mergeSort(array.slice(), updateArray, setTimeComplexity);
                break;
            case 'insertionSort':
                insertionSort(array.slice(), updateArray, setTimeComplexity);
                break;
            default:
                break;
        }
    };

    return (
        <div className="sorting-visualizer">
            <div className="controls">
                <button onClick={resetArray}>Reset Array</button>
                <button onClick={() => visualizeSort('bubbleSort')}>Bubble Sort</button>
                <button onClick={() => visualizeSort('quickSort')}>Quick Sort</button>
                <button onClick={() => visualizeSort('mergeSort')}>Merge Sort</button>
                <button onClick={() => visualizeSort('insertionSort')}>Insertion Sort</button>
            </div>
            <div className="array-container">
                {array.map((value, index) => (
                    <div
                        className="array-bar"
                        key={index}
                        style={{ height: `${value}px` }}
                    ></div>
                ))}
            </div>
            <div className="time-complexity">
                <p>Time Complexity: {timeComplexity}</p>
            </div>
        </div>
    );
};

export default SortingVisualizer;
