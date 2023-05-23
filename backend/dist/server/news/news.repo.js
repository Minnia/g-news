"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueriedNews = exports.getAllNews = void 0;
// https://gnews.io/api/v4/search?q=Elon&lang=en&country=us&max=10&apikey=17f37e3281b42e13158486fbc8abaf6a
const axios_1 = __importDefault(require("axios"));
function getAllNews() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get("https://gnews.io/api/v4/search", {
                params: {
                    q: "Verstappen",
                    lang: "en",
                    country: "us",
                    max: 10,
                    apikey: "17f37e3281b42e13158486fbc8abaf6a",
                },
            });
            console.log({ response });
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getAllNews = getAllNews;
function getQueriedNews(q, lang, country, max) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get("https://gnews.io/api/v4/search", {
                params: {
                    q: q,
                    lang: lang,
                    country: country,
                    max: max,
                    apikey: "17f37e3281b42e13158486fbc8abaf6a",
                },
            });
            console.log({ response });
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getQueriedNews = getQueriedNews;
//# sourceMappingURL=news.repo.js.map