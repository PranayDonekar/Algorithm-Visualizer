// Path: frontend/src/components/QuickSort.js
export const quickSort = async (array, updateArray, setTimeComplexity) => {
    let animations = [];
    let complexity = 0;

    const partition = (arr, low, high) => {
        let pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            complexity++;
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                animations.push([i, j, true]);
            } else {
                animations.push([i, j, false]);
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        animations.push([i + 1, high, true]);
        return i + 1;
    };

    const sort = (arr, low, high) => {
        if (low < high) {
            let pi = partition(arr, low, high);
            sort(arr, low, pi - 1);
            sort(arr, pi + 1, high);
        }
    };

    sort(array, 0, array.length - 1);

    setTimeComplexity(complexity);

    for (let i = 0; i < animations.length; i++) {
        const [index1, index2, isSwapped] = animations[i];
        await new Promise(resolve => setTimeout(resolve, 50));
        updateArray(array.slice());
    }
};
