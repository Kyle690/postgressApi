import express from 'express'
import { addMessage, indexPage, messagePage } from '../controllers';
import {modifyMessage, performAsyncAction} from '../middleware';

const router = express.Router();


router.get('/', indexPage);
router.get('/messages',messagePage);
router.post('/messages',modifyMessage,performAsyncAction,addMessage);

module.exports = router;
