//const express = require('express')
import express from 'express'
const app = express();



const port = 3000;
app.listen(port);
console.log (`Server is listening on port: http://localhost:${port}...`);
