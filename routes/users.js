import express from 'express'
import usersController from '../controller/users.js'

const router = express.Router()

// GET all users
router.get('/', usersController.getAll);

// POST add a new user
router.post('/', usersController.addUsers);

// PUT update an existing user
router.put('/:id', usersController.updateUser);

//get user by id 
router.get('/:id', usersController.get);

// DELETE delete an existing user
router.delete('/:id', usersController.deleteUser);


export default router