function hello() {
  console.log("hello..");
  //   console.log(":)");
}

function hi() {
  console.log("hi");
  //   console.log(":)");
}

hello();

// withEmoji(hello)();
const helloWithEmoji = withEmoji(hello);
helloWithEmoji();

withEmoji(hi)();

// Higher-Order-Function ==> function composition
function withEmoji(f) {
  return () => {
    f();
    console.log(":(");
  };
}

//------------------------------------------------------------------------------

/*

class HelloReactComp extends React.Component {
  render() {
    return <div>Hello </div>;
  }
}
class HiReactComp extends React.Component {
  render() {
    return <div>Hi </div>;
  }
}

// HOF
function wrapWithEmoji(Comp) {
  class WrapEmoji extends React.Component {
    render() {
      return (
        <div>
          <Comp /> <span>:)</span>
        </div>
      );
    }
  }

  return WrapEmoji;
}

const HelloCompWithEmoji = wrapWithEmoji(HelloReactComp); // HOC
const HiReactCompWithEmoji = wrapWithEmoji(HiReactComp);

*/
