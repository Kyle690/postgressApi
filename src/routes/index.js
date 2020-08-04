import express from 'express'
import {testEnvironmentVariable} from '../settings';
import {indexPage} from '../controllers';

const router = express.Router();

/* GET home page. */
router.get('/', indexPage);

module.exports = router;
