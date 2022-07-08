
'use strict';

const express = require('express');
const port = 4000;

let server = express();

server.use(express.static('public', {
	extensions: ['html']
}));



const init = () => {
    
server.listen(port, err => console.log(err || `Läuft ${port}`));
}



init();


