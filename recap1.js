// Max in an array using ES6
let arr = [1,10,5,30,0,9,11];
arr.reduce((a,b)=>{
    if (a>b){
        return x=a
    }
    return x=b
})
console.log(x)
//if any item in array repeated then return true
let arr1=[1,5,2,99,11,0]
const repeatCheck = (arr)=>{
    arr.reduce((a,b)=>{
        if (a==b){
            console.log(true)
        }
    })
    console.log(false) 
}
repeatCheck(arr1);
//Return missing integer
const missingInteger = (arr)=>{
    for(let i=0;i < arr.length-1;i++){
        if (arr[i+1]!==arr[i]+1){
            console.log(arr[i]+1)
        }
    }
}
let arr2 =[1,2,3,5,6,8]
missingInteger(arr2);
// Reverse an Array
let arr3=[1,2,3,4,5,6]
const reverseArr = (arr)=>{
    let newArr=[];
    for (let i=arr.length-1; i>=0;i--){
        newArr.push(arr[i]);
    }
    console.log(newArr)
}
reverseArr(arr3)
//return array after removing duplicates
let arr4=[1,2,5,2,99,11,0]
const duplicateRemove = (arr)=>{
    let newArr=[];
    arr.forEach(element => {
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    });
    console.log(newArr);
}
duplicateRemove(arr4);