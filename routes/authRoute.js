import express from 'express'
import {registerController, loginController, testController} from "../controller/authController.js"
import { isAdmin, requireSignIn } from '../middlerwares/authMiddleware.js'

//router object
const router = express.Router()

//REGISTER || METHOD POST
router.post(`/register`, registerController)

// LOGIN || POST
router.post('/login', loginController)

// test routes
router.get('/test', requireSignIn, isAdmin, testController)

// protected route auth
router.get('/user-auth', requireSignIn, (req, res)=> {
    res.status(200).send({ ok : true });
})


export default router;

