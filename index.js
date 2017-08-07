

var app=require("./config/config.js").dep();
var port=require("./config/config.js").port1();
var request = require('request');

// get list of companies


app.get('/Companyfiles', function(req, res) {
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'
    },
        url: "http://13.126.47.35:8080/AccountRight/?format=json"
    }
    request.get(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {

            console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);
        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})
//all contacts in a perticular company
app.get('/Companyfiles/contacts/:cid', function(req, res) {
    var cid = req.params.cid;
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'


    },
        url: "http://13.126.47.35:8080/AccountRight/"+cid+"/Contact/Customer/?format=json"
    }
    request.get(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {
            console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);

        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})
// to get perticular contact details
app.get('/Companyfiles/contacts/:cid/:id', function(req, res) {
    var id = req.params.id;
    var cid = req.params.cid;
    console.log("Request param id: "+id);
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'
    },
        url: "http://13.126.47.35:8080/AccountRight/"+cid+"/Customer/"+id+"/?format=json"
    }
    request.get(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {
            console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);


        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})

app.post('/Companyfiles/contacts/new/:cid', function(req, res) {
    var cid = req.params.cid;
    var requestBody = JSON.stringify(req.body);
    console.log("Request body: "+requestBody);
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'
    },
        url: "http://13.126.47.35:8080/AccountRight/"+cid+"/Contact/Customer/?format=json",
        body: requestBody
    }
    request.post(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 201) {
            console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);


        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})
app.put('/Companyfiles/contacts/:cid/:id', function(req, res) {
      var id = req.params.id;
     var cid = req.params.cid;
    var requestBody = JSON.stringify(req.body);
    console.log("Request body: "+requestBody);
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'
    },
        url: "http://13.126.47.35:8080/AccountRight/"+cid+"/Customer/"+id+"/?format=json",
        body: requestBody
    }
    request.post(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {
            console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);


        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})
app.delete('/Companyfiles/contacts/:cid/:id', function(req, res) {
    var id = req.params.id;
    var cid = req.params.cid;
    console.log("Request param id: "+id);
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo='
    },
        url: "http://13.126.47.35:8080/AccountRight/"+cid+"/Customer/"+id+"/?format=json"
    }
    request.delete(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {
            console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);


        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})



app.listen(3000)
module.exports=app;