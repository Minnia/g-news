"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongodb_1 = require("mongodb");
const routes_1 = __importDefault(require("./server/routes"));
const PORT = process.env.PORT || 3002;
const app = express();
app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});
const client = new mongodb_1.MongoClient("mongodb://localhost:27017", {});
client
    .connect()
    .then(() => {
    console.log("Connected to MongoDB");
    // Use the router
    app.use("/api/v1/", routes_1.default);
    // Start the server
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });
})
    .catch((error) => {
    console.log("Failed to connect to MongoDB", error);
});
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/api/v1", router);
// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });
//# sourceMappingURL=index.js.map