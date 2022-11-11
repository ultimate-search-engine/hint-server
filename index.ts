import express from 'express';

const app = express();
const port = 1216 || process.env.PORT;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (req, res) => {
    res.send('Ultimate Search Engine hint server is working!');
})

app.get('/request', async(req, res) => {
    try{
        res.send({response: req.query.q})
    } catch(error){
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`The application is listening on port ${port}`);
})
