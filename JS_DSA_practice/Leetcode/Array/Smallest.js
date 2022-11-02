//Q. Q.1 given an array find the nearest element for every
// element in the array such that the element index smaller than
// i nums =[39,27,11,4,24,32,32,1] out =-1,-1,-1,-1,4,24,24,-1

function SmallestElement(nums) {
    let op = [-1]
    for (let i = 0; i < nums.length; i++) {
        for (let j = i-1; j>=0; j--) {
            if (nums[i] > nums[j]) {
              op[i]  =  nums[j]
                break;
            }else{
              if(j===0){
                op[i]= -1
              }
                
            }
        }
        
    }
    return op
    
}
console.log(SmallestElement([39, 27, 11, 4, 24, 32, 32, 1]))