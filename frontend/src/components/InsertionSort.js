// Path: frontend/src/components/InsertionSort.js
export const insertionSort = async (array, updateArray, setTimeComplexity) => {
    let animations = [];
    let complexity = 0;

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            complexity++;
            array[j + 1] = array[j];
            animations.push([j + 1, array[j]]);
            j--;
        }
        array[j + 1] = key;
        animations.push([j + 1, key]);
    }

    setTimeComplexity(complexity);

    for (let i = 0; i < animations.length; i++) {
        const [index, value] = animations[i];
        await new Promise(resolve => setTimeout(resolve, 50));
        updateArray(array.slice());
    }
};
