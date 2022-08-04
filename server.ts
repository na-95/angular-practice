// server config
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const server = new express();
const port = process.env.PORT || 5000;
const corsConfig = { origin: '*', credentials: true };
server.use(express.json());
server.use(cors(corsConfig));
server.listen(port, () => console.log(`Voila! Server started on port ${port}`));

server.get('/', (req: any, res: any) => {
    res.json('"=-_,..S3rvEr is Up and H3aLtHy!i!..,_-="');
})

// server
const { Table_1 } = require('./models/index');

server.get('/table1/:id', async (req: any, res: any) => {
    const id = req.params.id;
    const record = await Table_1.findOne({where: {id}});
    res.json(record);
})



