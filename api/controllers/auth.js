import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import { createError } from "../utils/error.js"
import jwt from 'jsonwebtoken'
export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hash,
        })
        await newUser.save()
        res.status(200).send("user has been created")
    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ userName: req.body.userName })
        if (!user) return next(createError(404, "User not found"))

        const reversePassword = await bcrypt.compare(req.body.password, user.password)
        if (!reversePassword) return next(createError(400, "Wrong password or userName"))

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT
        )

        const { password, isAdmin, ...ortherDetails } = user._doc
        res.cookie("access_token", token, { httpOnly: true }).status(200).json({ ...ortherDetails })
        // res.status(200).json({ ...ortherDetails })
    } catch (err) {
        next(err)
    }
}