// //remove dublicate from sorted array 
// // let nums = [1, 1, 2]
// // function RemoveDublicate() {
// //     let NewArray = [];
// //     for (let i = 0; i < nums.length; i++) {
// //         for (let j = i; j < nums.length; j++) {
// //             if (nums[i] !== nums[j]) {
// //                 NewArray.push(nums[j])
// //                 console.log("hhh", NewArray)
// //             } else {
// //                 i++
// //             }
// //         }
// //     }
// //     return NewArray
// // }
// // console.log(RemoveDublicate([1, 2, 3]))

// // let nums = [1, 1, 2]
// function RemoveDublicate(nums) {
//     let index = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i - 1] !== nums[i]) {
//             nums[index] = nums[i]
//             i++
//         }
//     }
//     return index;
// }
// console.log(RemoveDublicate([1, 1, 2]))

var removeDuplicates = function(nums) {
    let insertIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i - 1] != nums[i]){  
            nums[insertIndex] = nums[i];  
            insertIndex++; 
        }   
    } 
     return insertIndex;
};

console.log(removeDuplicates([1,1,2]))