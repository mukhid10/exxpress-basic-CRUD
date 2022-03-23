const express = require('express');
const app = express();
const port = process.env.port || 1000;

const usersRoute = require('./router/users');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const myLoggerMiddleware = function (req, res, next) {
    req.time = new Date() 
    next()
  }

app.use(myLoggerMiddleware)

//template engine
app.set('view engine', 'ejs')

//file static
app.use('/asset', express.static('public'))


app.get('/', (req, res)=>{
    const home = {
        id: 1,
        alamat: "Pasuruan",
        tgl_access: req.time.toString()
    }

    res.render('pages/index', {home: home})
});

app.get('/about', (req, res)=>{
    res.render('pages/about')
});

app.get('/express', (req, res)=>{
    res.redirect('https://expressjs.com/')
})

app.use(usersRoute)

app.listen(port, ()=>{
    console.log('Success' + port);
})