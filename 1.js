//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
    if ( number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }
    return result;
}

a = even_or_odd(11);
console.log(a);