import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const router = express.Router();

// Route pour la homepage
router.get('/', AppController.getHomepage);

// Routes pour les étudiants
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
