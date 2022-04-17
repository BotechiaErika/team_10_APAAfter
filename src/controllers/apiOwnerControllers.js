src / controllers / apiOwnerControllers.js
const usersList = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const localsList = JSON.parse(fs.readFileSync(localesFilePath, 'utf-8'));
let controller = {
        dashAPA: (req, res) => {
            res.render('apiOwner/ownersHome', {
                title: 'owners apa'
            })
        },
        list: (req, res) => {
            res.render('apiOwner/showUsers', {
                title: 'Lista de Usuarios',
                usersList: usersList
            });
        },
        showUbyID: (req, res) => {
            let register_user = req.res.register_user
            res.render('apiOwner/detailsUsers', {
                title: 'Detalles Usuario ' + register_user,
                usersList: usersList
            })
        },
        listLocals: (req, res) => {
            let rgL = req.params.rgL;
            let telos = req.query.telos;

            telos = (req.body.telos)
            telos = {
                emailHotel = req.body.emailHotel,
                telephoneHotel = req.body.telephoneHotel,
                webPageHotel = req.body.webPageHotel,
                addressHotel = req.body.addressHotel,
                parkingHotel = req.body.parkingHotel,
            }
            console.log(telos)
        },
        storeLocal: (req, res) => {
            let newEJSON = fs.readFileSync(__dirname, "./newEJSON")
            newEJSON = newE.push(JSON.stringify(newEJSON))
        }
        module.exports = controllers