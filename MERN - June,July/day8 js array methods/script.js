// const arrow = n => console.log(n);
// arrow(23);

// (() => {
//     console.log("start");
// })();
//* let arr = [4,53,2,752];
// arr.length , arr.push(3) , arr.pop()

// arr.unshift(3)0; //~> insert Element from start;
// arr.shift() //~> removes element from start;

// arr.at(3) === arr[3]

// arr.indexOf(752) - return index

// arr.lastIndexOf() //! in b/w those () you have to write element you want to access from last

// let s = arr.join("a");
// s = arr.join("-");

// console.log(s);

// let n = [4,5,3,2,1];
// let m = [3,21,4,5];
// let y = n.concat(m);
// console.log(y,n,m);


// let x = m.includes(34);
// let z = m.includes(40);
// console.log(x,z);


//slice 
// let arr = [4,222,444,222,444,346646,7,21,3,88,743,5,,11,7];
// let i = arr.slice(4,7);
// console.log(i);

//splice
// let arr = [1,2,3,6,14,15,16,7,8,9];
// arr.splice(arr.length-2,1,20);      //! first index no. , second delete count , element to add
// arr.splice(1,0,20);      //! first index no. , second delete count , element to add
// console.log(arr);

//find 
// let arr = [3,1,5,2,66,3,8,9,0,12,11];
// let m = arr.find(num=> num==3*33);
// console.log(m);


// let arr = [3,1,4,5,8,9,76,3,1,3];

// arr.forEach((num,index)=>{ //~> we can not store it in variable
//     console.log(num*2);
// })

// let r = arr.map((num,index)=>{ //! we can store it in variable
//     console.log(num*2);
//     return " mewom eow meow";
// })
// console.log(r);

// let arr = [11,12,13,14,15];
// arr.forEach((n)=>{
//     console.log(n);
// })
// let r = arr.map((n)=>{
//     return n**2;
// })
// console.log(r);

// let arr = [3,4,1,4];
// let n = arr.filter((num)=>{ //& filter return array whereas find return elements
//     return num%2==0;
// })
// console.log(n);

//reduce
// let arr = [4,2,5,2,6,78,90,1];
// let total = arr.reduce((prev,curr)=>{
//     return prev+curr;
// },4) 
// console.log(total);


let arr = [1,2,2,3,4,2,5];
arr.filter((n,i)=>{
    
})