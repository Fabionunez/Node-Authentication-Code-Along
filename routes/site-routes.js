const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log('req.path', req.path);
  
  if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route ---
  }
  else if (req.path === '/') {
    res.render('index');
  } 																//		|
  else {                          	//    |
  	res.redirect("/login");       	//    |
  }                                 //    |
}); // ------------------------------------                                
//     | 
//     V
router.get("/secret", (req, res, next) => {
  res.render("secret");
});

module.exports = router;

