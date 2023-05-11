function zeroesToTheEnd(arr) {

    arr.map(e => {
        if(e == 0) {
            const index = arr.indexOf(e);
            arr.splice(index, 1);
            arr.push(e);
        }
    });

    console.log(arr);
}

zeroesToTheEnd([1, 2, 0, 0, 4, 0, 5]);
zeroesToTheEnd([0, 0]);
zeroesToTheEnd([0, 0, 2, 0, 5]);
zeroesToTheEnd([4, 4, 5]);