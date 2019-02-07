const server = require('express')();

server.get('/',(req,res)=>{
 res.send('seu nome aqui.');
});


server.get('/teste',(req,res)=>{
 res.send('Hello teste.');
});

server.get('/helder',(req,res)=>{
 res.send('Hello helder.');
});

server.get('/matheus',(req,res)=>{
    res.send('Hello Matheus.');
   });

server.get('/felipefranks',(req,res)=>{
 res.send('Hello felipefranks.');
});

server.listen(3000,()=>console.log('serve running on port 3000'))
