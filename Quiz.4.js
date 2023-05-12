function doesTriangleFit(triangle1, triangle2) {
    const sideA = triangle1[0];
    const sideB = triangle1[1];
    const sideC = triangle1[2];

    doesFit = true;

    if(sideA + sideB <= sideC 
        || sideA + sideC <= sideB 
        || sideB + sideC <= sideA) {

        doesFit = false;
    } else if(sideA <= triangle2[0] 
        && sideB <= triangle2[1]
        && sideC <= triangle2[2]) {

        doesFit = true;
    } else {
        doesFit = false;
    }

    console.log(doesFit);
}

doesTriangleFit([1, 1, 1], [1, 1, 1]) 

doesTriangleFit([1, 1, 1], [2, 2, 2])

doesTriangleFit([1, 2, 3], [1, 2, 2])

doesTriangleFit([1, 2, 4], [1, 2, 6])