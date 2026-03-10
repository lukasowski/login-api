const express = require("express");
const app = express();

// pozwala odbierać JSON
app.use(express.json());

// endpoint logowania
app.post("/login", (req, res) => {
    const { login, password } = req.body;

    if (login === "admin" && password === "1234") {
        res.json({ status: "ok" });
    } else {
        res.json({ status: "error" });
    }
});

// prosty test czy serwer działa
app.get("/", (req, res) => {
    res.send("Login API działa");
});

// ważne dla Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
