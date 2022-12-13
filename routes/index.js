const router = require("express").Router();

router.use("/", require("./homeRoutes"));
router.use("/", require("./apiRoutes"));

module.exports = router;
