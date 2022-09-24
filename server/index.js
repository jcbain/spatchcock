const { start: startDb } = require("./lib/database");
const app = require("./lib/server");

const PORT = 3000;

const start = async () => {
  await startDb();

  app.listen(PORT, () => console.log(`server listening on post ${PORT}`));
};

start().catch((err) => console.log(err));
