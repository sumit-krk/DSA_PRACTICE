// Harry & Meghan were playing a game. Harry gave Meghan a number N, and asked her to multiply it by 3, and then add 7 to it, and then finally subtract 10 from it. Since, Meghan is very weak in Math, help her win the game by finding the final value of N.

function runProgram(input) {
    // Write code here
    console.log(input*3+7-10)
  }
  
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }