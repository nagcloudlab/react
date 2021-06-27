console.log("-index.js-");

//-----------------------------------------------
// javascript code with DOM + Timer browser api
//-----------------------------------------------

const clock1Ele = document.getElementById("clock-1");
const clock2Ele = document.getElementById("clock-2");

setInterval(() => {
  
clock1Ele.innerHTML = `
    <div class="card">
        <div class="card-header">Asia/Kolkata</div>
        <div class="card-body">
            <span>
                ${new Date().toLocaleTimeString("en-US", {
                    timeZone: "Asia/Kolkata",
                })}
            </span>
        </div>
    </div>
`;


clock2Ele.innerHTML = `
    <div class="card">
        <div class="card-header">Asia/Dubai</div>
        <div class="card-body">
            <span>
                ${new Date().toLocaleTimeString("en-US", {
                    timeZone: "Asia/Dubai",
                })}
            </span>
        </div>
    </div>
`;



}, 1000);
