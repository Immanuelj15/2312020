const express = require("express");

const app = express();

app.use(express.json());

const notificationRoute = require("./routes/notification_route");

app.use("/notifications", notificationRoute);

app.get("/", (req, res) => {
    res.send("notification");
});

app.listen(3000, () => {
    console.log("Server running  port 3000");
});