"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import newsRoutes from "./server/news/news.routes";
const router = express_1.default.Router();
router.get("/ping", (req, res) => res.send("ding"));
// router.get("/news", newsRoutes);
module.exports = router;
//# sourceMappingURL=routes.js.map