// Create a clalculator

function addition(num1,num2) {
    ans = num1 + num2;
    return ans
}

function substraction(num1,num2) {
    ans = num1 - num2;
    return ans
}

function multiplication(num1,num2) {
    ans = num1 * num2;
    return ans
}

function division(num1,num2) {
    ans = num1 / num2;
    return ans
}

function cal(num1,num2) {
    const add = addition(num1,num2);
    const sub = substraction(num1,num2);
    const mul = multiplication(num1,num2);
    const div = division(num1,num2);
    
    console.log(
        "The Numbers you entered are ", num1, "and", num2,".",
        "\n Addition:    "  ,add,
        "\n Substraction:   ", sub,
        "\n Multiplication: ", mul,
        "\n Division:   ", div
        );
}

cal(5,2)
cal(2,3)
