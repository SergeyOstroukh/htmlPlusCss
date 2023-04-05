// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    let count = 0;
    let summ = 0;
    let newArr = [];
    if (!input || input.length === 0) {
    // if (input.length < 1) {
        return newArr;
    }else
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                count += 1
            } else {
                summ += input[i]
            }

        }
        newArr.push(count, summ);
return newArr;
}

let array1 = [];
console.log(countPositivesSumNegatives(array1))