const express = require("express");
const router = express.Router();
const Schema = require("../controller");
router.post("/post", Schema.createSchema);
router.get("/get", Schema.getSchema);
router.get("/single/:id", Schema.singleSchema);
router.put("/update/:id", Schema.updateSchema);
router.delete("/delete/:id", Schema.deleteSchema);
module.exports = router;
