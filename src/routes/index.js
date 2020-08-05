import express from 'express'
import {indexPage, messagePage} from '../controllers';

const router = express.Router();

/* GET home page. */
router.get('/', indexPage);
router.get('/messages',messagePage);

module.exports = router;
