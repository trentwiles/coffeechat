const { saveMessage } = require("../io/utils");

module.exports = io => {
  io.on("connection", socket => {
    console.log("New User Connected");

    socket.on("join", (params, callback) => {
      socket.join(params.channelID);
      if (typeof callback === "function") callback();
    });

    socket.on("createdMessage", (data, callback) => {
      saveMessage(io, data);
      if (typeof callback === "function") callback();
    });

    socket.on("disconnect", () => {
      console.log("Diconected");
    });
  });
};
