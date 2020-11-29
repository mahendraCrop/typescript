"use strict";
function add(ip1, ip2) {
    return ip1 + ip2;
}
function printResult(input) {
    console.log("result is :", input);
}
printResult(add(5, 6));
var functionCallType;
functionCallType = add;
function HandleWithCallBack(ip1, ip2, cb) {
    cb(ip1 + ip2);
}
var RefHandleWithCallBack;
HandleWithCallBack(7, 6, function (val) {
    console.log("val ", val);
});
RefHandleWithCallBack = HandleWithCallBack;
RefHandleWithCallBack(4, 6, function (refval) {
    console.log("refval ", refval);
});
// functionCallType = printResult;
