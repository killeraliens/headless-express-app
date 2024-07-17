"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const utils_1 = require("./utils");
const routes_1 = require("./api/routes");
dotenv_1.default.config();
if (!process.env.PORT) {
    utils_1.logger.error('PORT environment variable is not set.');
    process.exit(1);
}
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(utils_1.requestLogger); // Log each request
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/api', routes_1.authRoutes);
app.use('/api', routes_1.databricksRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
    utils_1.logger.error(err.stack);
    res.status(500).send('Something broke!');
});
const server = app.listen(port, () => {
    utils_1.logger.info(`Server running on port ${port}`);
});
// Graceful shutdown
process.on('SIGTERM', () => {
    utils_1.logger.info('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        utils_1.logger.info('HTTP server closed');
    });
});
process.on('SIGINT', () => {
    utils_1.logger.info('SIGINT signal received: closing HTTP server');
    server.close(() => {
        utils_1.logger.info('HTTP server closed');
    });
});
