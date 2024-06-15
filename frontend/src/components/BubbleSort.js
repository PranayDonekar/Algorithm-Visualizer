// Path: frontend/src/components/BubbleSort.js
export const bubbleSort = async (array, updateArray, setTimeComplexity) => {
    let animations = [];
    let n = array.length;
    let complexity = 0;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            complexity++;
            if (array[j] > array[j + 1]) {
                animations.push([j, j + 1, true]);
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            } else {
                animations.push([j, j + 1, false]);
            }
        }
    }

    setTimeComplexity(complexity);

    for (let i = 0; i < animations.length; i++) {
        const [index1, index2, isSwapped] = animations[i];
        await new Promise(resolve => setTimeout(resolve, 50));
        updateArray(array.slice());
    }
};
