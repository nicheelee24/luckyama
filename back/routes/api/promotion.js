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


router.post("/getpromotions", auth,async (req, res) => {
    try {
        let promotionsList = await Promotion.find({
            agentname: "luckyama",
           
        }).limit(50);
       // console.log("data....."+promotionsList)
        res.json({ promotionsList });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
module.exports = router;