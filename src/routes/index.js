import express from 'express'
import { addMessage, indexPage, messagePage } from '../controllers';

const router = express.Router();


router.get('/', indexPage);
router.get('/messages',messagePage);
router.post('/messages',addMessage);

module.exports = router;
