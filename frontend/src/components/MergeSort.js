// Path: frontend/src/components/MergeSort.js
export const mergeSort = async (array, updateArray, setTimeComplexity) => {
    let animations = [];
    let complexity = 0;

    const merge = (arr, l, m, r) => {
        let n1 = m - l + 1;
        let n2 = r - m;
        let L = new Array(n1);
        let R = new Array(n2);
        for (let i = 0; i < n1; i++) {
            L[i] = arr[l + i];
        }
        for (let j = 0; j < n2; j++) {
            R[j] = arr[m + 1 + j];
        }
        let i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
            complexity++;
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                animations.push([k, L[i], true]);
                i++;
            } else {
                arr[k] = R[j];
                animations.push([k, R[j], true]);
                j++;
            }
            k++;
        }
        while (i < n1) {
            arr[k] = L[i];
            animations.push([k, L[i], true]);
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = R[j];
            animations.push([k, R[j], true]);
            j++;
            k++;
        }
    };

    const sort = (arr, l, r) => {
        if (l < r) {
            let m = Math.floor((l + r) / 2);
            sort(arr, l, m);
            sort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    };

    sort(array, 0, array.length - 1);

    setTimeComplexity(complexity);

    for (let i = 0; i < animations.length; i++) {
        const [index, value, isMerged] = animations[i];
        await new Promise(resolve => setTimeout(resolve, 50));
        updateArray(array.slice());
    }
};
