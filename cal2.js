// calculator [Using another  type of functions.]

const a = function (num1,num2) {
    ans = num1 + num2;
    return ans
}

const s = function (num1,num2) {
    ans = num1 - num2;
    return ans
}

const m = function(num1,num2) {
    ans = num1 * num2;
    return ans
}

const d = function(num1,num2) {
    ans = num1 / num2;
    return ans
}

function cal(num1,num2) {
    console.log(
        "The Numbers you entered are ", num1, "and", num2,".",
        "\n Addition:    "  ,a(num1,num2),
        "\n Substraction:   ", s(num1,num2),
        "\n Multiplication: ", m(num1,num2),
        "\n Division:   ", d(num1,num2)
        );
}

cal(5,2)
//cal(2,3)

