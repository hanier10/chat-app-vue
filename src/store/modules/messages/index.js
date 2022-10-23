import getters from "./getters";
const module = {
  namespaced: true,
  state() {
    return {
      messages: [
        {
          id: 1,
          author: 1,
          message: "Hola 👀",
          timestamp: new Date().toLocaleTimeString(),
          read: true,
          channelId: 1,
        },
        {
          id: 2,
          author: 1,
          message: "Hola desde otro canal 👀",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 2,
        },
      ],
    };
  },
  getters,
};

export default module;
