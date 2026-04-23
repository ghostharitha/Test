import User from "../models/User.js";

export function createUser(req, res) {
    const data = req.body;

    const newUser = new User(data);

    newUser.save().then(() => {
        res.json({ message: "User created successfully" });
    }).catch((error) => {
        res.status(500).json({ error: "User created failed..." })
    });

}

export function findUser(req, res) {
    const email = req.params.email;

    User.findOne({ email }).then((user) => {
        res.json(user);
    });

}

export function deleteUser(req, res) {
    const email = req.params.email;

    User.findOneAndDelete({ email }).then((user) => {
        res.json("Deleted");
    });

}

export function updateUser(req, res) {
    const email = req.params.email;

    User.findOneAndUpdate({ email }).then((user) => {
        res.json("Updated");
    });

}