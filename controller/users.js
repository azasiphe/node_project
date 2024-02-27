import { addUser, getAllUsers, getUserById, updateUserById, deleteUserById } from '../models/user.js';
import bcrypt from 'bcrypt';

const getAll = async (req, res) => {
    const users = await getAllUsers();
    res.json(users);
};

const addUsers = async (req, res) => {
    const { firstName, lastName, Age, Gender,Role, emailAdd, userPass, userProfile } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(userPass, 10);

        await addUser(firstName, lastName, Age, Gender,Role, emailAdd, hashedPassword, userProfile);

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, Age, Gender,Role, emailAdd, userPass, userProfile } = req.body;

    bcrypt.hash(userPass, 10, async (err, hash) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        try {
            await updateUserById(id, firstName, lastName, Age, Gender,Role, emailAdd, hash, userProfile);
            res.status(200).json({ message: 'User updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to update user' });
        }
    });
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await deleteUserById(id);
        res.json(await getAllUsers());
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const get = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await getUserById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default { getAll, addUsers, updateUser, deleteUser, get };




