import express from "express";
import bodyParser from "body-parser";

import router from "./server/routes";

const PORT = process.env.PORT || 3002;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const jsonParser = bodyParser.json();

// Use the router
app.use("/api/v1/", jsonParser, router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
