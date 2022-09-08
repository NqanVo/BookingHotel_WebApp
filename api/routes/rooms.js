import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

// CREATE
router.post('/:hotelID', verifyAdmin, createRoom)
// UPDATE
router.put('/:id', verifyAdmin, updateRoom)
// DELETE 
router.delete('/:id', verifyAdmin, deleteRoom)
// GET
router.get('/:id', getRoom)
// GET ALL 
router.get('/', getAllRoom)

export default router