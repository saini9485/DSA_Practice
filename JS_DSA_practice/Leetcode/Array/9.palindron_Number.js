/*Given an integer x, return true if x is palindrome integer. */
Example:-1
//Input: x = 121
Output: true
//Explanation 121 reads as 121 from left to right and from right to left.

solution:-1
function palindronCheck (x){
    let temp = x.toString().split('')
    let y = temp.reverse().join('')
    if(x==y){
        return true
    }
    else {
        false
    }
}
console.log(palindronCheck(121))
