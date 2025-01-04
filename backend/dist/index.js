"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.js
const express_1 = __importStar(require("express"));
const dotenv_1 = require("dotenv");
const db_js_1 = __importDefault(require("./utils/db.js"));
const job_route_js_1 = __importDefault(require("./routes/job.route.js"));
const candidate_route_js_1 = __importDefault(require("./routes/candidate.route.js"));
// Load environment variables
(0, dotenv_1.config)();
// Verify if MONGO_URI is loaded correctly
if (!process.env.MONGO_URI) {
    console.error('Error: MONGO_URI is not defined in .env file.');
    process.exit(1);
}
// Connect to MongoDB
(0, db_js_1.default)();
const app = (0, express_1.default)();
app.use((0, express_1.json)());
// Routes
app.use('/api/jobs', job_route_js_1.default);
app.use('/api/candidates', candidate_route_js_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
