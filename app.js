//app.js

const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
app.use("/", router); 

router.get("/", (req, res) => {
    res.send("App is running..");
});

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}/.netlify/functions/app`);
    });
}