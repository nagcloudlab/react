function hello() {
  console.log("hello..");
  //   console.log(":)");
}

function hi() {
  console.log("hi");
  //   console.log(":)");
}

function HelloReactComp() {
  console.log("HelloReactComp");
}

// Higher-Order-Function ==> function composition
function withEmoji(f) {
  return () => {
    f();
    console.log(":(");
  };
}

hello();
withEmoji(hello)();
withEmoji(hi)();

withEmoji(HelloReactComp)();
