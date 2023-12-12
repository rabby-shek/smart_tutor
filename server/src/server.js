const app = require("./app");
const { port } = require("./variables");
app.listen(port, () => {
  console.log(`server is starting at http://localhost:${port}`);
});
