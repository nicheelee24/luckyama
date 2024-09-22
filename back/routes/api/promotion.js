const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const axios = require("axios");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
// const { getIo } = require('../../socketManager');

const Promotion = require("../../models/Promotion");
const User = require("../../models/User");


router.get("/getpromotions", auth,async (req, res) => {
    try {
        let promotionsList = await Promotion.limit(50);
        console.log("data....."+promotionsList)
        res.json({ status: "0000", promotionsList });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
module.exports = router;