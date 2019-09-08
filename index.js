let express=require('express');
let http=require('http');
let app = express();

app.use(express.static(__dirname));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/dist/index.html');  
})
