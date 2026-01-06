"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endPromise = void 0;
const http_1 = require("http");
const util_1 = require("util");
exports.endPromise = (0, util_1.promisify)(http_1.ServerResponse.prototype.end);
