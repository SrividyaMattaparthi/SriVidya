let list = [1,2,3,4,5,6,7,8,9,10];
let adjustedList=[]

adjustedList= list.map(


(element, index, list) =>{

return{
 index,
list: element * 10
}

}

)
console.log(adjustedList)