import express from "express";

const app = express();
const port = 80;

app.use("/budget-app", express.static("dist"));
app.use("/budget-app", express.static("build"));

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
});
