var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var bodyParser = require('body-parser');
var multer = require('multer'); 
var mongoose = require('mongoose');

var basic = require('functions/basic');


app.use(express.cookieParser()); 

app.use(express.methodOverride());
app.use(express.session({ secret: 'securedsession' }));

app.use(bodyParser.json());

app.use(express.favicon());
app.use(bodyParser.urlencoded({extended:true})); // for parsing application/json
app.use(multer());// for parsing multipart/form-data

var connectionstring ='mongodb://localhost/lighthouse';
mongoose.connect(connectionstring);
var ip =  '127.0.0.1';
var port =  3000;

app.get('/showcontact/:tp',function(req,res){
            var tp=req.params['tp'];
            
            basic.rgstrdcontacts(tp,function (found) {
            
                res.json(found);
            

        }); 
        

});

app.post('/addcontact',function(req,res){
        var newcontact=req.body;
        
        basic.addcontact(newcontact,function (found) {
        
                res.json(found);
            

        }); 
                
});

app.delete('/removecontact/:id',function(req,res){
        var id=req.params['id'];
        
        console.log("found");
        basic.removecontact(id,function (found) {
            
                res.json(found);
            

        }); 
                
});




app.listen(port,ip);
