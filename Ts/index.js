var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var moviesBox = document.querySelector("#moviesBox");
var movies = document.querySelector("#movies");
var showsBox = document.querySelector("#showsBox");
var tv = document.querySelector("#tv");
var people = document.querySelector("#people");
var Actors = document.querySelector("#Actors");
var movLink = document.getElementById("movLink");
var shows = document.getElementById("shows");
var actorsLink = document.getElementById("actors");
// Display SECTION
var dispalyMovies = function (movies) {
    var movieBox = "";
    for (var i = 0; i < movies.length; i++) {
        movieBox += "\n          <div class=\"col-md-3 cursor-pointer\">\n\n              <div class=\"position-relative\">\n                <img\n                  src=\"https://image.tmdb.org/t/p/w500".concat(movies[i].poster_path, "\"\n                  class=\"w-100\"\n                  alt=\"\"\n                />\n                <h3 class=\"fs-6\">").concat(movies[i].title, "</h3>\n                <p class=\"vote position-absolute top-0 end-0 p-1\">").concat(movies[i].vote_average, "</p>\n\n            </div>\n            </div>\n");
    }
    moviesBox.innerHTML += movieBox;
};
var dispalyShows = function (show) {
    var showBox = "";
    for (var i = 0; i < show.length; i++) {
        showBox += "\n          <div class=\"col-md-3 cursor-pointer\">\n\n              <div class=\"position-relative\">\n                <img\n                  src=\"https://image.tmdb.org/t/p/w500".concat(show[i].poster_path, "\"\n                  class=\"w-100\"\n                  alt=\"\"\n                />\n                <h3 class=\"fs-6\">").concat(show[i].title, "</h3>\n                <p class=\"vote position-absolute top-0 end-0 p-1\">").concat(show[i].vote_average, "</p>\n\n            </div>\n            </div>\n");
    }
    showsBox.innerHTML += showBox;
};
var showActors = function (actor) {
    var box = "";
    for (var i = 0; i < actor.length; i++) {
        box += "\n          <div class=\"col-md-3 cursor-pointer\">\n\n              <div class=\"position-relative\">\n                <img\n                  src=\"https://image.tmdb.org/t/p/w500".concat(actor[i].profile_path, "\"\n                  class=\"w-100\"\n                  alt=\"\"\n                />\n                <h3 class=\"fs-6\">").concat(actor[i].name, "</h3>\n                \n\n            </div>\n            </div>\n");
    }
    Actors.innerHTML += box;
};
// ************************************* SECTION
// Get Data SECTION
function getMovies(page) {
    return __awaiter(this, void 0, void 0, function () {
        var result, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.themoviedb.org/3/discover/movie?api_key=9e8f374c695421864a545db3a15ed6eb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=".concat(page))];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    results = (_a.sent()).results;
                    console.log(results);
                    dispalyMovies(results);
                    return [2 /*return*/];
            }
        });
    });
}
function getShows(page) {
    return __awaiter(this, void 0, void 0, function () {
        var result, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.themoviedb.org/3/discover/tv?api_key=9e8f374c695421864a545db3a15ed6eb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=".concat(page))];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    results = (_a.sent()).results;
                    console.log(results);
                    dispalyShows(results);
                    return [2 /*return*/];
            }
        });
    });
}
function getActors(page) {
    return __awaiter(this, void 0, void 0, function () {
        var result, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.themoviedb.org/3/person/popular?api_key=9e8f374c695421864a545db3a15ed6eb&language=en-US&page=".concat(page))];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    results = (_a.sent()).results;
                    console.log(results);
                    showActors(results);
                    return [2 /*return*/];
            }
        });
    });
}
// ************************************* SECTION
// Call *SECTION
movLink === null || movLink === void 0 ? void 0 : movLink.addEventListener("click", function (e) {
    moviesBox.classList.remove("d-none");
    tv.classList.add("d-none");
    people.classList.add("d-none");
    getMovies(1);
});
actorsLink === null || actorsLink === void 0 ? void 0 : actorsLink.addEventListener("click", function (e) {
    moviesBox.classList.add("d-none");
    moviesBox.classList.remove("py-5");
    tv.classList.add("d-none");
    people.classList.remove("d-none");
    people.classList.add("d-block");
    getActors(1);
});
shows === null || shows === void 0 ? void 0 : shows.addEventListener("click", function (e) {
    moviesBox.classList.add("d-none");
    moviesBox.classList.remove("py-5");
    people.classList.add("d-none");
    tv.classList.remove("d-none");
    tv.classList.add("d-block");
    getShows(1);
});
getMovies(1);
