console.log("-index.js-");

//-----------------------------------------------
// javascript code with DOM + Timer browser api
//-----------------------------------------------

const clock1Ele = document.getElementById("clock-1");
const clock2Ele = document.getElementById("clock-2");

// UI component
function Clock(props) {
  let { timeZone } = props;
  return `
        <div class="card">
            <div class="card-header">${timeZone}</div>
            <div class="card-body">
                <span>
                    ${new Date().toLocaleTimeString("en-US", {
                      timeZone,
                    })}
                </span>
            </div>
        </div>
        `;
}

setInterval(() => {
  clock1Ele.innerHTML = Clock({ timeZone: "Asia/Kolkata" });
  clock2Ele.innerHTML = Clock({ timeZone: "Asia/Dubai" });
}, 1000);
