const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

function getUsers() {
    const data = fs.readFileSync("users.json");
    return JSON.parse(data);
}

app.post("/login", (req, res) => {
    const { login, password } = req.body;

    const users = getUsers();

    const user = users.find(u => u.login === login && u.password === password);

    if (user) {
        res.json({ status: "ok" });
    } else {
        res.json({ status: "error" });
    }
});

app.listen(process.env.PORT || 3000);
