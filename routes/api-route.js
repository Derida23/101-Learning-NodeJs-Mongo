// initialize express router
let router = require('express').Router();

// set default API response
router.get('/', function(req,res){
    res.json({
        status: 'API is working',
        message: 'Welcome to Enjoy'
    });
});

// import contact controller
var contactController = require('../controller/contactController');

// contact apiRoutes
router.route('/contacts')
.get(contactController.index)
.post(contactController.new)

router.route('/contacts/:contact_id')
.get(contactController.view)
.patch(contactController.update)
.put(contactController.update)
.delete(contactController.delete)

// data siswa apiRoutes
var dataSiswa = require("../controller/siswaController");

// data siswa api
router.route('/datasiswa')
.get(dataSiswa.index)

// export API
module.exports = router;