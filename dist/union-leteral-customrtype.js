"use strict";
function Combiner(input1, input2, resultType) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultType == "as_number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    console.log("result ", result);
}
const number1 = 1;
let number2 = 2.5;
Combiner(number1, number2, "as_number");
Combiner("5", "6", "as_number");
Combiner("mahe", "bobbari", "as_text");
//# sourceMappingURL=union-leteral-customrtype.js.map