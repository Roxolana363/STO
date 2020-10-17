var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var jsonParser = bodyParser.json();

app.use('/static', express.static(path.join(__dirname, 'img')))

app.get("/get-calc-data", function(req, res){
    let data = {
        'years': 10,
        'people': 228,
        'repair_machines': 383
    }
    res.send(data);
});

app.get("/get-services-list", function(req, res){
    let data = {
    0:{
        'img': '/static/8.png',
        'text': 'Text1',
        'link': '#'
        },
        1:{
            'img': '/static/1.png',
            'text': 'Text2',
            'link': '#'
        },
        2:{
            'img': '/static/2.png',
            'text': 'Text3',
            'link': '#'
        },
        3:{
            'img': '/static/3.png',
            'text': 'Text4',
            'link': '#'
        },
        4:{
            'img': '/static/4.png',
            'text': 'Text5',
            'link': '#'
        },
        5:{
            'img': '/static/5.png',
            'text': 'Text6',
            'link': '#'
        },
        6:{
            'img': '/static/6.png',
            'text': 'Text7',
            'link': '#'
        },
        7:{
            'img': '/static/7.png',
            'text': 'Text8',
            'link': '#'
        },
    }
    res.send(data);
});

app.get("/get-contacts", function(req, res){

    let data = {
    'phones' : [
        '+3806847284628',
        '+3895736285732',
        '+3794848293823'
    ],
      'address': 'Львов,ул. Кульпарковская 74',
        'email': 'autoshop@gmail.com'
    }
    res.send(data);
});

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});
