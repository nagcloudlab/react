console.log("-index.js-");

// UI component
function Clock(props) {
  let { timeZone } = props;
  // JSX i.e React Elements -> Template for components
  return (
    <div className="card">
      <div className="card-header">{timeZone}</div>
      <div className="card-body">
        <span>
          {new Date().toLocaleTimeString("en-US", {
            timeZone,
          })}
        </span>
      </div>
    </div>
  );
}

function Wall() {
  return (
    <div>
      <div className="row">
        <div id="clock-1" className="col-6">
          <Clock timeZone="Asia/Kolkata" />
        </div>
        <div id="clock-2" className="col-6">
          <Clock timeZone="Asia/Dubai" />
        </div>
      </div>
    </div>
  );
}

setInterval(() => {
  ReactDOM.render(<Wall />, document.getElementById("root"));
}, 1000);
