function add(ip1:number, ip2:number):number{
     return ip1+ip2;
}
function printResult(input:number):void{
     console.log("result is :", input);
} 
printResult(add(5,6));

let functionCallType: (input1:number,input2:number)=>number;
functionCallType = add;

function HandleWithCallBack(ip1:number,ip2:number, cb:(num:number)=>void){
     cb(ip1+ip2);
}
let RefHandleWithCallBack:(i1:number,i2:number,i3:(i4:number)=>void )=>void;
HandleWithCallBack (7, 6, (val)=>{
     console.log("val ",val);
})
RefHandleWithCallBack = HandleWithCallBack;
RefHandleWithCallBack(4,6,(refval)=>{
     console.log("refval ", refval);
})
// functionCallType = printResult;