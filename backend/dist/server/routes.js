"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const news_routes_1 = __importDefault(require("../server/news/news.routes"));
const favorites_routes_1 = __importDefault(require("../server/favorites/favorites.routes"));
const router = express_1.default.Router();
router.get("/ping", (req, res) => res.send("ding"));
router.use("/news", news_routes_1.default);
router.use("/favorites", favorites_routes_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map