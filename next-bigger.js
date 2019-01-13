function nextBigger(n) {
    const arr = String(n).split('');

    for (let i = arr.length - 2; i >= 0; i--) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[j] > arr[i]) {
                //switch digist of i and j
                const temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                //sort ending part
                const begin = arr.slice(0, i + 1),
                    ending = arr.slice(i + 1);
                ending.sort((a, b) => a - b);
          
                return +begin.concat(ending).join('');
            }
        }
    }
    return -1;    
}