const router = require("express").Router();
const User = require("../model/user");

router.post("/add", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      age: req.body.age,
      contact_no: req.body.contact_no,
      experience: req.body.experience,
    }); //req.body
    const data = await user.save();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json({ msg: err.message });
  }
});

router.get("/details", async (req, res) => {
  try {
    const user = await User.find().select("-_id -__v").sort({ name: 1 });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.json({ msg: err.message });
  }
});

router.put("/update", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.body.userId },
      {
        name: req.body.name,
        age: req.body.age,
        contact_no: req.body.contact_no,
      },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    console.log(err);
    res.json({ msg: err.message });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const user = await User.deleteMany({ name: req.body.name });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.json({ msg: err.message });
  }
});

module.exports = router;
