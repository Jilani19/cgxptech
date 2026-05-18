import express from 'express';
import { getStats } from '../controllers/stat.controller.js';
import { getIndustries, getIndustryBySlug } from '../controllers/industry.controller.js';
import { getTeam } from '../controllers/team.controller.js';
import { submitContactForm } from '../controllers/contact.controller.js';
import { subscribeNewsletter } from '../controllers/newsletter.controller.js';

const router = express.Router();

// Stats endpoints
router.get('/stats', getStats);

// Industries CMS endpoints
router.get('/industries', getIndustries);
router.get('/industries/:slug', getIndustryBySlug);

// Corporate Team endpoints
router.get('/team', getTeam);

// Submissions
router.post('/contact', submitContactForm);
router.post('/subscribe', subscribeNewsletter);

export default router;
