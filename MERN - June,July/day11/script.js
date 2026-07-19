// object destrucure 
// array destructure 

// let arr = [34,22,44,"ff"];

// let [n , n2 , , , n4 = "ferwerwe"] = arr;

// console.log(n4);


// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [...arr1,...arr2, 44, 3,];  //! spread operator > "..." 
// console.log(arr3);

// let cat = {
//     name : "billu",
//     bread : "Persian cat"
// };

// let dog = {
//     name2 : "puchu",
//     bread2 : 'Stray dog'
// };

// let animal = {...cat,...dog};
// console.log(animal);



// let obj = {
//     name : "iyer",
//     age : 34,
//     rollno : 21
// };

// obj.name = "sodhi";

// console.log(obj);

// let obj2 = {...obj,name:"popatlal"};
// console.log(obj2);



// function add(n1,n2,n3,...r){ //* rest operator.
//     console.log(n1+n2+n3 , r);
// }
// add(2,3,4,3,4,3333,543344);




// const maxM = (...rest) => {
//     let maxn = 0
//     for(let i=0;i<rest.length;i++){
//         if(rest[i]>maxn){
//             maxn = rest[i];
//         }
//     }
//     return maxn;
// }

// console.log(maxM(3,44,5));

let arr = [1,2,3,4,5,6,7,8,9,10]

const mySplice = (idx,dc,...adde) => {
    if(dc===0){
        let newarr = [...arr.slice(0,idx+1),...adde,...arr.slice(idx+1,arr.length)];
        return newarr;
    }
    else if(dc!=0){
        let newarr = [...arr.slice(0,id),...adde,...arr.slice(idx+1,arr.length)];
        return newarr;
    }
}

console.log(mySplice(2,2,4,5));