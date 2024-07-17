"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databricksRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.databricksRoutes = router;
router.get('/databricks', (req, res) => {
    // use services to make the API call to Databricks here
    const response = {
        status: 'success',
        message: 'Data fetched from Databricks API',
        data: {},
    };
    res.status(200).json(response);
});
router.post('/databricks', (req, res) => {
    // use services to make the API call to Databricks here
    const response = {
        status: 'success',
        message: 'Data sent to Databricks API',
        data: {},
    };
    res.status(200).json(response);
});
