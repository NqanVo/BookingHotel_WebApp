import express from "express";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router()
router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello, you are logged in")
})
// CREATE
router.post('/', createUser)
// UPDATE
router.put('/:id', updateUser)
// DELETE 
router.delete('/:id', deleteUser)
// GET
router.get('/:id', getUser)
// GET ALL 
router.get('/', getAllUser)


export default router