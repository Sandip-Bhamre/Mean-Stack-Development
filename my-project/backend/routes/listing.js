
const express = require("express");
const router = express.Router();

const users = [];

router.post("/", async (req, res) => {
    // Registration logic goes here
  const { username, password, email } = req.body;
  const existingUser = users.find(user => user.username === username || user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'Username or email already exists' });
  }

  const newUser = { username, password, email };
  users.push(newUser);
  res.status(201).json({ message: 'Registration successful' });


  });


// router.post("/",(req,res) =>  {
//     res.send("All Listing");
// })

// router.put("/:listingID",(req,res) =>  {
//     res.send("All Listing");
// })

// router.delete("/:listingID",(req,res) =>  {
//     res.send("All Listing");
// })

// router.get("/:listingID",(req,res) =>  {
//     res.send("All Listing");
// })





router.get("/",(req,res) =>  {
    res.send("All Listing");
})


module.exports = router;