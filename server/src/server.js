const app = require("./app");
const connectDatabase = require("./config/db");
const { port } = require("./variables");
app.listen(port, async () => {
  console.log(`server is starting at http://localhost:${port}`);
  await connectDatabase();
});
