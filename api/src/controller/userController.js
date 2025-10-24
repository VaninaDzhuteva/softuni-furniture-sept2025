import { Router } from "express";

const userController = Router();

userController.get('/', (req, res) => {
    const {email, password} = req.body;

    res.end();
});

export default userController;