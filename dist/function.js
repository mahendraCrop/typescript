"use strict";
function add(ip1, ip2) {
    return ip1 + ip2;
}
function printResult(input) {
    console.log("result is :", input);
}
printResult(add(5, 6));
let functionCallType;
functionCallType = add;
function HandleWithCallBack(ip1, ip2, cb) {
    cb(ip1 + ip2);
}
let RefHandleWithCallBack;
HandleWithCallBack(7, 6, (val) => {
    console.log("val ", val);
});
RefHandleWithCallBack = HandleWithCallBack;
RefHandleWithCallBack(4, 6, (refval) => {
    console.log("refval ", refval);
});
