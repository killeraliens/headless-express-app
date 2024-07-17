"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = exports.logger = void 0;
var logger_1 = require("./logger");
Object.defineProperty(exports, "logger", { enumerable: true, get: function () { return logger_1.logger; } });
var requestLogger_1 = require("../api/middleware/requestLogger");
Object.defineProperty(exports, "requestLogger", { enumerable: true, get: function () { return requestLogger_1.requestLogger; } });
