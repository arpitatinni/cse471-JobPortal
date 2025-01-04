"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const candidateSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    skills: [String],
    experience: { type: String, default: '' },
    profileVisibility: { type: Boolean, default: true },
    appliedJobs: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Job' }],
});
const Candidate = mongoose_1.default.model('Candidate', candidateSchema);
exports.default = Candidate;
