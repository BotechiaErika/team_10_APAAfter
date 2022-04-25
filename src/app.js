/***********settings****** */

const PORT = 3030;
const port = process.env.PORT || 3030;
const express = require('express');
const path = require('path');
//const extType = path.extname('file');
//const methodOverride = require('method-override');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
/***********static  files***************************/
app.use(express.static(path.join(__dirname, './../public')));

/***********middlewares expreess*******/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(methodOverride('_method'));
//app.use(metricsForEntry);
//app.use(
//    session({
//        secret: 'myAPIAPAseccion',
//        resave: true,
//        saveUninitialized: true,
//    })
//);
/**************APA MIDDLEWARES***************/

/**************require routes***************/
const mainRouters = require('./routes/mainRoutes.js');
const apaClubRouter = require('./routes/apaClubRoutes.js');
const usersRouter = require('./routes/usersRoutes.js');
//const productsRouter = require('./routes/productsRoutes.js');
const enterpriseRouter = require('./routes/enterpriseRoutes.js');
const apiOwnerRouter = require('./routes/apiOwnerRoutes.js');
//const searchRouter = require('./routes/searchRoutes.js');
const gameAIRouter = require('./routes/gameAIRoutes.js');
const staffRouter = require('./routes/staffRoutes.js');
/**************define end points***************/
app.use('/', mainRouters);
app.use('/apa-club', apaClubRouter);
app.use('/usuarios', usersRouter);
//app.use('/telos', productsRouter);
app.use('/empresas', enterpriseRouter);
app.use('/ApaOwners', apiOwnerRouter);
//app.use('/buscarTelos', searchRouter);
app.use('/ApaGame', gameAIRouter);
app.use('/staff', staffRouter);
/***********Server listen 3030****** */
app.listen(port || PORT, () => {
    console.log('WS LEVANTADO Y CORRIENDO EN 3030');
});
module.exports = app;