/*Given an integer array nums, return true if any value appears at least twice in the array, and return 
false if every element is distinct. */
//Example 1:
/*Input: nums = [1,2,3,1]
Output: true*/
/*    //nums.sort()
    //[1,2,3,1]
    // [3,2,4,5]
//     3 = 2,3,1
//     2 = 3,1
//     3 = 1
    
//     3 = 2,4,5 == ! 0=1,0=2,0=3   
//     2 = 3,4,5 == 1=0, 1=2, 1=3
    
//     4 = 3,2,5 == 2 =0, 2= 1, 2=2
    
//     [1,2,4,3]
//    1 = 1=2,0=1  1=4,0=2  1=3,0=3 
//     2 = 2=4, 1=2, 2=3,1=3 
//     4 = 4=3,2=3
    
//     1 = 1=2,0=1 1=4,0=2 1=3,0=3
//     2 = 2=1,1=0, 2=4,1=2, 2=3,1=3
    
    
//     1= 1,2,3,4
//     2 = 1,2,3,4
//     3 = 1,23,4 */
Solution:-1
function dublicate(nums) {
    // if(nums.length == 1)
    // return false
   // nums.sort(function(a, b){return a-b});
//     console.log(dublicate(nums))
//     for(i=0;i<nums.length;i++) {
//         for(j=i;j<nums.length;j++){
//             if(nums[i]==nums[j]){
//                 return true
//             }
//             else{
//                 false
//             }
//         }
//     }
//  };

var flag = true;
for(var i=0;i<nums.length;i++) {
    for(var j=i+1;j<nums.length;j++){
        if(nums[i]==nums[j]){
           flag = false;
            break;
             // console.log(nums[i],"i")
        }
    }
}
 if(flag == false){
     return true;
 } else {
     return false;
 }
};

 console.log(dublicate( [1,2,3,1]))