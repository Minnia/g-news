const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/favorites";
// Set up a connection to the MongoDB database using Mongoose
mongoose
    .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map