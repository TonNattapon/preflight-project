const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  console.log(req.body);
  if (
    req.body.password === process.env.PASSWORD
    // req.body.username == process.env.USERNAME
  ) {
    const token = jwt.sign({ userId: 1 }, process.env.SECRET);

    res.json({
      token,
    });
  } else {
    res.status(401).send("worng username or password");
  }
};
