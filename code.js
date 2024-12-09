function tsp_ls(distance_matrix) {
    const len = distance_matrix.length;

    if ((len == 0) || (len == 1)) {
        return 0; 
    }
    let current = Array.from({ length: len }, (_, i) => i);
    for (let i = currentRoute.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        let tmp = currentRoute[i];
        currentRoute[i] = currentRoute[j];
        currentRoute[j] = tmp;
    }

    function calcLen(route) {
        let dist = 0;
        for (let i = 0; i < route.length - 1; i++) {
            dist += distance_matrix[route[i]][route[i + 1]];
        }
        return dist;
    }

    function swap(route, i, k) {
        while (i < k) {
            let tmp = route[i];
            route[i] = route[k];
            route[k] = tmp;
            i++;
            k--;
        }
    }

    function copy(route) {
        let newWay = [];
        for (let i = 0; i < route.length; i++) {
            newWay.push(route[i]);
        }
        return newWay;
    }
    const maxIt = len * len;
    let min = calcLen(current);
    let bestRoute = copy(current);
    for (let iteration = 0; iteration < maxIt; iteration++) {
        let i = Math.floor(Math.random() * (len - 1));
        let k = Math.floor(Math.random() * (len - i - 1)) + i + 1;
        const currentLength = calcLength(current);
        swap(currentRoute, i, k);
        const newLength = calcLength(current);
        if (newLength >= currentLength) {
            swap(current, i, k);
        }
        if (newLength < min) {
            min = newLength;
            bestRoute = copy(currentRoute);
        }
    }

    return min;
}
