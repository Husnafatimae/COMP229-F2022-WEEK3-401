import { Router } from "express"; 

import { displayHomePage, displayAboutPage, displayProjectsPage, displayServicesPage, displayContactPage } from "../controllers/index.controller.server.js"; 

const router = Router(); 

router.get('/', displayHomePage); 
router.get('/home', displayHomePage); 
router.get('/about', displayAboutPage); 
router.get('/projects', displayProjectsPage); 
router.get('/services', displayServicesPage); 
router.get('/contact', displayContactPage); 





export default router;