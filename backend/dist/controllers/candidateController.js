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
exports.getMatchedJobs = exports.getAppliedJobs = exports.updateProfile = exports.registerCandidate = void 0;
const Candidate_js_1 = __importDefault(require("../models/Candidate.js"));
const Job_js_1 = __importDefault(require("../models/Job.js"));
// Register Candidate
const registerCandidate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCandidate = new Candidate_js_1.default(req.body);
        yield newCandidate.save();
        res.status(201).json(newCandidate);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.registerCandidate = registerCandidate;
// Update Candidate Profile
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCandidate = yield Candidate_js_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCandidate);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.updateProfile = updateProfile;
// Get Applied Jobs
const getAppliedJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const candidate = yield Candidate_js_1.default.findById(req.params.id).populate('appliedJobs');
        res.status(200).json(candidate.appliedJobs);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAppliedJobs = getAppliedJobs;
// Job Match Notifications
const getMatchedJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { skills } = yield Candidate_js_1.default.findById(req.params.id);
        const matchedJobs = yield Job_js_1.default.find({ skillsRequired: { $in: skills } });
        res.status(200).json(matchedJobs);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getMatchedJobs = getMatchedJobs;
