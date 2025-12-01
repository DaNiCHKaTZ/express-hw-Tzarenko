const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.status(200);
    res.json({
        "message": "OK"
    });
});
router.get("/status", (req, res) => {
    res.status(200);
    res.json({
        "status": "OK",
        "time": new Date().toISOString()
    });
})
module.exports = router;