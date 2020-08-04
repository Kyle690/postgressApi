import express from 'express'
import {testEnvironmentVariable} from '../settings';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.status(200).json({message:testEnvironmentVariable});
});

module.exports = router;
