console.log("3" + 2);
console.log("3" * 2);
console.log(5 % 2);
console.log(Math.floor(5 / 2));
console.log(Math.ceil(5 / 2));
console.log([1, 2, 3, 4, 5].slice(1, 3));
console.log("Hello World".slice(2, 7));
console.log("Hello".split(""));
console.log("Hello".split(" "));
console.log("Hello".split("").join(","));
console.log({} === {});
console.log({ name: "Hello" } === { name: "Hello" });
console.log(10=="10");
console.log(10==="10");
console.log([1, 2, 3, 4, 5, 6].filter((el) => el % 2 === 0));

function dummy1() {
  console.log(a);
  var a = 10;
  console.log(a);
  var a = 100;
  console.log(a);
}
dummy1();

// function dummy2(){
//     let a;
//     a=10;

//     const b;
//     b=20;
//     console.log(a,b)
// }
// dummy2();

var obj={0:"one", 1:"two", 2:"Three"}
var objLength=Object.keys(obj);
console.log(objLength);
for(let i=0; i<objLength.length; i++){
    console.log(i + "-" + obj[`${i}`]);
}

var a=10;
console.log("line number 2", a);
function dummy3(){
    console.log("line number 4", a);
    var a=20;
    a++;
    console.log("Line number 7",a);
    if(a){
        var a=30;
        a++;
        console.log("Line number 11",a);
    }
    console.log("line number 13", a);
}
dummy3();
console.log("line number 16",a);

for(var i=0; i<=5;i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
}
