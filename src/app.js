/***********settings****** */
//require('dotenv').config
const PORT = 6996
const port = process.env.PORT || 6996
const express = require('express')
const app = express()
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
/***********static  files***************************/
app.use(express.static(path.join(__dirname, './../public')));

/***********middlewares expreess*******/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



/**************APA MIDDLEWARES***************/

/**************require routes***************/
const mainRouters = require('./routes/mainRoutes.js')
const apaClubRouter = require('./routes/apaClubRoutes.js')
const usersRouter = require('./routes/usersRoutes.js')
const productsRouter = require('./routes/productsRoutes.js')
const enterpriseRouter = require('./routes/enterpriseRoutes.js')
const apiOwnerRouter = require('./routes/apiOwnerRoutes.js')
const searchRouter = require('./routes/searchRoutes.js')
const gameAIRouter = require('./routes/gameAIRoutes.js')
const staffRouter = require('./routes/staffRoutes.js')
    /**************define end points***************/
app.use('/', mainRouters);
app.use('/apa-club', apaClubRouter);
app.use('/usuarios', usersRouter);
app.use('/telos', productsRouter);
app.use('/empresas', enterpriseRouter);
app.use('/ApaOwners', apiOwnerRouter);
app.use('/buscarTelos', searchRouter)
app.use('/ApaGame', gameAIRouter)
app.use('/staff', staffRouter)
    /***********Server listen 6996****** */
app.listen(port || PORT, () => {
    console.log('WS LEVANTADO Y CORRIENDO EN 6996')
})
module.exports = app