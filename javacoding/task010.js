function sum (numbers) {
    let sum =0;
    for(let i =0; i<numbers.length;i++){
    if (typeof numbers[i] === 'number') {
        sum+=numbers[i]   
    }
    
    }
return sum;
}
let numb = [1,5,6,7,"g"];
  console.log(sum(numb))