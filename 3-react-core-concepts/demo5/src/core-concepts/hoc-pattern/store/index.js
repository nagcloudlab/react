// state management lib   ( redux )

const state = {
  channels: ["channel-1", "channel-2", "channel-3"],
  messages: {
    "channel-1": [
      "channel-1-message-1",
      "channel-1-message-2",
      "channel-1-message-3",
    ],
    "channel-2": ["channel-2-message-1", "channel-2-message-2"],
  },
};

const listeners = [];

const store = {
  getState() {
    return state;
  },
  subscribe(listener) {
    listeners.push(listener);
    return () => {
      // unsubscribe
    };
  },
};

//
setInterval(() => {
  let ch = "channel-" + (state.channels.length + 1);
  state.channels = [...state.channels, ch];
  listeners.forEach((listener) => listener());
}, 5000);

setInterval(() => {
  let me = "channel-1-message-NEW";
  state.messages["channel-1"].push(me);
  listeners.forEach((listener) => listener());
}, 5000);

export default store;
