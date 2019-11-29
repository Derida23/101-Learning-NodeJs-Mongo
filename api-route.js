// initialize express router
let router = require('express').Router();

// set default API response
router.get('/', function(req,res){
    res.json({
        status: 'API is working',
        message: 'Welcome to Enjoy'
    });
});

// export API
module.exports = router;