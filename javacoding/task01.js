function descendingOrder(n){
let arr = n.toString().split('').map(Number);
let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j =i+1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr.join('');
    
}
let num = 2671194;
console.log(descendingOrder(num))

