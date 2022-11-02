/*find the pairs of array element for which sum is equal to given target value
(Two sum problem) but you does't consider same number two times */
Solution:-1 
//let arr = [1,2,3,4,5,6,7,8,9]  // target should be 9 => 2+7
//hashing technique=> hashmap => lookup time 0(1)
// function twoSum (arr, target) {
//     let hash = {}
//     let sum = []
//     arr.forEach((nums)=>{
//         let diffrent = target-nums;
//         if(hash[diffrent.toString()]!==undefined){
//             sum.push([num,diffrent]);
//         }
//         hash[nums.toString()]==nums;
//     })
//     return sum;
// }
// console.log(twoSum(arr ,9));
Solution:-2  /*Two sum */
// nums = [2,7,11,15], target = 9 ->Output: [0,1]
//brute force solution
// function twoSum (nums, target){
//     for(i=0;i<nums.length;i++){
//         for(j=i;j<nums.length;j++){
//             if(nums[i]+nums[j]===target){
//                 return [i,j]
//             }
//         }
//     }
// }
// console.log(twoSum([2,7,11,15],9))  //[ 0, 1 ]


sulotion:-2
// var twoSum = function(nums, target) {
//     var map = {};
//     for(var i = 0 ; i < nums.length ; i++){
//         var n = nums[i];

//         if(map[target-n] >= 0){
//             return [map[target-n],i]
//         } 
//         else {
//             map[n] = i;   //use map to store the value and index position
//         }
//     }
// };


solution:-3 //with obj 
function twoSum (nums,target){
    let obj ={};
    for(let i=0;i<nums.length;i++){
        let diff = target-nums[i];
        if(obj[diff]!=undefined){
            return [i, obj[diff]];
        }else{
            obj[nums[i]]=i;
        }   
    }      
}
console.log(twoSum([2,7,11,15],9))

