
var express = require('express')
var bodyParser = require('body-Parser')
const { Socket } = require('socket.io')
var app = express()
var http  = require('http').Server(app)
var io = require('socket.io')(http)
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var messages = [{name:'Tim', messages: 'hi'},{name: 'Jane', messages: 'hello'}]

app.get('/messages',(req,res) =>{
    res.send(messages)
})

port = 3000;
app.post('/messages',(req,res) =>{
    messages.push(req.body)
    io.emit('message', req.body)
    res.sendStatus(200)
})

io.on('connection', (Socket) =>{
    console.log("A user connected")
})

http.listen(3000,() => {
    console.log("The Server is listening on port", port)
})