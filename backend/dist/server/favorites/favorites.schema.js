"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Schema } = mongoose;
// Define a schema for a person document
const favoriteSchema = new Schema({
    title: String,
    description: String,
    content: String,
    url: String,
    image: String,
    publishedAt: String,
    source: {
        name: String,
        url: String,
    },
});
const favorite = mongoose.model("Favorite", favoriteSchema);
exports.default = favorite;
//# sourceMappingURL=favorites.schema.js.map