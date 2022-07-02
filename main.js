
function fibonacciGenerator (n) {
    var output = [];
    
    if (n === 1) {
        output = [0];
    } 
    else if (n ===2 ) {
        output = [0,1];
    } 
    else {
        output = [0,1];

        for (var i =2;i < n; i++) {
            output.push(output[output.length - 2 ] + output[output.length - 1]);  //[0,1,1,2] .length is 4 now - 2 is index 2, and .length - 1 is index 3
        }  
    } 

    return output;

}

output = fibonacciGenerator(9);
console.log(output); 
    