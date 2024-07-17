"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.authRoutes = router;
router.post('/register', (req, res) => {
    // replace with controller services to make the app db interactions
    res.status(200).json({ message: 'User registered successfully' });
});
router.post('/login', (req, res) => {
    res.status(200).json({ message: 'User logged in successfully' });
});
router.post('/logout', (req, res) => {
    res.status(200).json({ message: 'User logged out successfully' });
});
