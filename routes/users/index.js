const User = require('../../db/User')
const userModel = require('../../models/users/')

exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.getAll()

        if (!users) {
            return res.status(400).json({
                success: false,
                message: 'Users Not Found'
            })
        } else {
            return res.status(200).json({
                success: true, 
                data: users
            })
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await userModel.getById(id)

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User Not Found'
            })
        } else {
            return res.status(200).json({
                success: true,
                data: user
            })
        }    
    } catch (err) {
        return res.status(500).json({
            sucess: false,
            message: err
        })
    }
}

exports.createUser = async (req,res) => {
    try {
        const { firstName, lastName, email, phoneNumber } = req.body
        const newUser = {
            firstName,
            lastName,
            email, 
            phoneNumber
        }

        const user = await userModel.create(newUser)

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User Not Created'
            }) 
        } else {
            return res.status(201).json({
                success: true,
                data: user
            })
        }
    } catch (err) {
        return res.status(500).json({
            sucess: false,
            message: err
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const updated = req.body

        const user = await userModel.updateById(id, updated)

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User Not Updated'
            })
        } else {
            return res.status(200).json({
                success: true,
                data: user
            })
        }
    } catch (err) {
        return res.status(500).json({
            sucess: false,
            message: err
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id

        const deleted = await userModel.deleteById(id)
        
        if (deleted.deletedCount === 0) {
            return res.status(400).json({
                success: false,
                message: 'User Not Deleted'
            })
        } else {
            return res.status(200).json({
                success: true,
                data: deleted.deletedCount
            })
        }
    } catch (err) {
        return res.status(500).json({
            sucess: false,
            message: err
        })
    }
}
