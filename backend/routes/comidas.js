const express = require("express");
const router = express.Router();
const comidaCtrl = require("../controllers/comidaController");
router.get("/", comidaCtrl.getAll);
router.get("/:id", comidaCtrl.getById);
router.post("/", comidaCtrl.create);
router.put("/:id", comidaCtrl.update);
router.delete("/:id", comidaCtrl.delete);
module.exports = router;
