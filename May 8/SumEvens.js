const arr = [1,2,3,4,5,6,7,8,9,10]
const even = [];
sum = 0;

arr.forEach(number =>{
if(number % 2 === 0){
 even.push(number);
 }
});
console.log(even);
even.forEach(number =>{
 sum+=number;



});
console.log(sum);