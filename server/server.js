var index = require('../index.js');
var users = require('../api/api.js');
var app1=require('../config/config.js').dep();
app.use('/', index);
app.use('/users', users);




module.exports=app1;
