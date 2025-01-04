"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const candidateController_js_1 = require("../controllers/candidateController.js"); // Ensure the correct path and .js extension
const router = express_1.default.Router();
router.post('/register', candidateController_js_1.registerCandidate);
router.put('/update/:id', candidateController_js_1.updateProfile);
router.get('/applied-jobs/:id', candidateController_js_1.getAppliedJobs);
router.get('/matched-jobs/:id', candidateController_js_1.getMatchedJobs);
// Export the router as the default export
exports.default = router;
