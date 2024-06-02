import express from 'express';
import expressListEndpoints from 'express-list-endpoints';
import { writeFileSync } from 'fs';

import sample1 from "./data/sample1.json";
import sample2 from "./data/sample2.json";

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/v1/endpoints', (_, res) => {
    res.send(expressListEndpoints(app));
});

app.post('/sample1', (_, res) => {
    res.send(sample1);
});

app.post('/api/v1/sample1', (req, res) => {
    console.log(req.body);
    try {
        writeFileSync('./src/data/sample1.json', JSON.stringify(req.body), { flag: 'w' });
        res.status(200).send("success");
    } catch (error) {
        console.log(error);
        res.status(500).send("error");
    }
});

app.post('/api/v1/sample2', (req, res) => {
    console.log(req.body);
    try {
        writeFileSync('./src/data/sample2.json', JSON.stringify(req.body), { flag: 'w' });
        res.status(200).send("success");
    } catch (error) {
        console.log(error);
        res.status(500).send("error");
    }
});

app.post('/sample2', (_, res) => {
    res.send(sample2);
});

app.post('/sample3', (_, res) => {
    res.send(sample2);
});

app.post('/sample4', (_, res) => {
    res.send(sample2);
});

app.post('/sample5', (_, res) => {
    res.send(sample2);
});

app.post('/sample6', (_, res) => {
    res.send(sample1);
});

app.post('/sample7', (_, res) => {
    res.send(sample2);
});

app.post('/sample8', (_, res) => {
    res.send(sample2);
});

app.post('/sample9', (_, res) => {
    res.send(sample2);
});

app.post('/sample10', (_, res) => {
    res.send(sample2);
});

app.post('/sample11', (_, res) => {
    res.send(sample1);
});

app.post('/sample12', (_, res) => {
    res.send(sample2);
});

app.post('/sample13', (_, res) => {
    res.send(sample2);
});

app.post('/sample14', (_, res) => {
    res.send(sample2);
});

app.post('/sample15', (_, res) => {
    res.send(sample2);
});

app.listen(3000, () => {
    console.log('Server is running');
    console.log(expressListEndpoints(app));
});