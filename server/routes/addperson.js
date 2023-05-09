const router = require("express").Router();
const addperson = require("../models/addPerson");
const user = require("../models/User");

router.get("/", (req, res) => {
  res.send("addperson router is working");
});

router.post("/person", async (req, res) => {
  const person = new addperson(req.body);
  const data = await person.save();

  res.json(data);
});

router.get("/data", async (req, res) => {
  const data = await addperson.find(req._id);
  res.json(data);
});

module.exports = router;
