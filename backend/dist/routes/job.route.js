"use strict";
// job.route.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Example job routes
// Get all jobs
router.get('/', (req, res) => {
    res.send('Retrieve all jobs');
});
// Create a new job
router.post('/create', (req, res) => {
    res.send('Create a new job');
});
// Get a specific job by ID
router.get('/:id', (req, res) => {
    res.send(`Retrieve job with ID ${req.params.id}`);
});
// Update a specific job
router.put('/:id', (req, res) => {
    res.send(`Update job with ID ${req.params.id}`);
});
// Delete a specific job
router.delete('/:id', (req, res) => {
    res.send(`Delete job with ID ${req.params.id}`);
});
exports.default = router;
