const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

router
    .route("/")
    .get((req, res) => res.render(path.resolve('views','registration.ejs')));
module.exports = router;