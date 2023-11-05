//const express = require('express')
import express from 'express';
import ejs from 'ejs';
import path from 'path'
import {dirname,join }from 'path';
import {fileURLToPath} from 'url'

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));  

console.log(path.resolve('src'))
console.log(join(__dirname))


app.set ('views', join(__dirname,'views'))
//app.set ('views', join(path.resolve('src'),'views'))


app.set('view engine','ejs')       
app.get('/', (req,res)=>res.render('index'))

const port = 3000;
app.listen(port);
console.log(`Server is listening on port: http://localhost:${port}.....`)
