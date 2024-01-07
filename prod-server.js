import fs from "fs";
import http from "http";
import https from "https";
import express from "express";

const app = express();

app.use((req, res, next) => {
  req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
});

app.use((req, res, next) => {
  console.log(req.originalUrl);
  console.log(req.protocol, req.hostname, req.baseUrl, req.headers);
  next();
});

app.use("/budget-app", express.static("dist"));
app.use("/budget-app", express.static("build"));

let httpsServer;

if (process.env.HTTPS_PRIVATE_KEY && process.env.HTTPS_CERT) {
  const key = fs.readFileSync(process.env.HTTPS_PRIVATE_KEY, "utf8");
  const cert = fs.readFileSync(process.env.HTTPS_CERT, "utf8");

  httpsServer = https.createServer({ key, cert }, app);
}

const httpServer = http.createServer(app);

httpServer.listen(80);

if (httpsServer) {
  httpsServer.listen(443);
}
