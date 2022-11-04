//perform push pop operation without using inbuild function
let top = -1;
let stack = []
let size = 8

function Push(data){
    if(stack.length>=size){
        return "Stack is Full"
    }else{
        top++;
        stack[top] = data
    }
}
console.log(Push(6))
function Pop(){
    if(top<0){
        return "satck is Empty"
    }
    else{
        top--
    }
}
console.log(Pop())