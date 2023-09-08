import { app } from "./app";

const PORT = process.env.PORT || 6010;

app.listen(PORT, () => {
  console.log(`Listenning on port ${PORT}`);
});

process.on("SIGINT", () => {
  console.log("App finished");
});
