import User from "../models/User.js";

export function createUser(req, res) {
    const data = req.body;

    const newUser = new User(data);

    newUser.save().then(() => {
        res.json({ message: "User created successfully" });
    }).catch((error) => {
        console.error("Error creating user:", error.message);
        res.status(500).json({ error: error.message || "User creation failed..." })
    });

}

export function findUser(req, res) {
    const email = req.params.email;

    User.findOne({ email }).then((user) => {
        res.json(user);
    }).catch((error) => {
        console.error("Error finding user:", error.message);
        res.status(500).json({ error: error.message || "Error finding user" });
    });

}

export function deleteUser(req, res) {
    const email = req.params.email;

    User.findOneAndDelete({ email }).then((user) => {
        res.json({ message: "User deleted successfully" });
    }).catch((error) => {
        console.error("Error deleting user:", error.message);
        res.status(500).json({ error: error.message || "Error deleting user" });
    });

}

export function updateUser(req, res) {
    const email = req.params.email;
    const updateData = req.body;

    User.findOneAndUpdate({ email }, updateData, { new: true }).then((user) => {
        res.json({ message: "User updated successfully", user });
    }).catch((error) => {
        console.error("Error updating user:", error.message);
        res.status(500).json({ error: error.message || "Error updating user" });
    });

}