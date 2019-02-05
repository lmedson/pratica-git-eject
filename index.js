const server = require('express')();

server.use('/',(req,res)=>{
 res.send('seu nome aqui.');
});

server.use('/teste',(req,res)=>{
 res.send('Hello conflito.');
});

server.listen(3000,()=>console.log('serve running on port 3000'))
