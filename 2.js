// Your task is to create a function that does four basic mathematical operations.
//
//     The function should take three arguments - operation(string/char), value1(number), value2(number).
//     The function should return result of numbers after applying the chosen operation.
//
// Examples(Operator, value1, value2) --> output
function basicOp(operation, value1, value2) {
    if (operation === "+") {
        result = value1+value2;
    }
    else if (operation === "-")
    {
        result = value1-value2;
    }
    else if (operation === "*")
    {
        result = value1*value2;
    }
    else if (operation === "/")
    {
        result = value1/value2;
    }
    return result;
}


a = basicOp("+",1,2);
console.log(a);