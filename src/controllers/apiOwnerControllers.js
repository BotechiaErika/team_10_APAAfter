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
        let telos = req.query.telos;

        let telos = {
            emailHotel = req.body.emailHotel,
            telephoneHotel = req.body.telephoneHotel,
            webPageHotel = req.body.webPageHotel,
            addressHotel = req.body.addressHotel,
            parkingHotel = req.body.parkingHotel,
        }
        let newE = []
        console.log(newE.get[telos]
            },
            storeLocal: (req, res) => {
                let newEJSON = fs.readFileSync(__dirname, "./../newEJSON")
                newEJSON = newE.get(JSON.stringify(newE.push(JSON.stringify())))
            })
}
module.exports = controller