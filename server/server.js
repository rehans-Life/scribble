const { createServer } = require("http");

const { Server } = require("socket.io");
const { default: mongoose } = require("mongoose");

if (process.env.NODE_ENV === "development") {
  const dotenv = require("dotenv");
  dotenv.config({
    path: "./config.env",
  });
}

const app = require("./app");
const {
  leaveRoom,
  createRoom,
  joinRoom,
  boardChange,
  startGame,
  wordSelected,
  guessedWord,
  updateRoom,
} = require("./controllers/socketControllers");
const keys = require("./config/keys");

const { PORT } = process.env;
const DB_URI = keys.DB_URI.replace(
  "<password>",
  keys.DB_PASSWORD,
);

(async () => {
  await mongoose.connect(DB_URI);

  const httpServer = createServer(app);

  // Creating a socket io server out of an express server
  const io = new Server(httpServer, {
    pingTimeout: 60000,
    cors: {
      origin: keys.FRONTEND_URL,
    },
  });

  io.on("connection", (socket) => {
    socket.on("join-room", joinRoom(io, socket));
    socket.on("create-room", createRoom(socket));
    socket.on("update-room", updateRoom(io, socket));
    socket.on("board-change", boardChange(socket));
    socket.on("leave-room", leaveRoom(io, socket, socket.id));

    socket.on("start-game", startGame(io, socket));
    socket.on("word-selected", wordSelected(io, socket));
    socket.on("guess-word", guessedWord(io, socket));
    socket.on("set-time", (roomId, time) =>
      socket.to(roomId).emit("new-timer", time),
    );

    socket.on("disconnect", async () => {
      leaveRoom(io, socket, socket.id)();

      socket._cleanup();
      socket.disconnect();
    });
  });

  httpServer.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`);
  });
})();
