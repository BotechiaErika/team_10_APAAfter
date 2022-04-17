const fs = require('fs')
const path = require('path')
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json')
const localesFilePath = path.join(__dirname, '../data/localAndRoomsDataBase.json')
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
        showUByID: (req, res) => {
            let register_user = req.params.register_user
            res.render('apiOwner/detailsUsers', {
                title: 'Detalles Usuario ' + register_user,
                usersList: usersList
            })
        },
        listLocals: (req, res) => {
            let rgL = req.params.rgL;
            res.render('apiOwner/showLocals', {
                title: 'listar Locales',
                localsList: localsList
            })
        }
    },
    createEnterprise: (req, res) => {
        res.send('data')
        class newE { nameHotel, telephoneHotel, webPageHotel, adresseHotel, parkingHotel, comuna.value }(
            let constructor newE = {
                this.nameHotel = req.body.nameHotel;
                this.telephoneHotel = req.body.telephoneHotel;
                this.webPageHotel = req.body.webPageHotel;
                this.adresseHotel = req.body.addressHotel;
                this.parkingHotel = req.body.parkingHotel;
                this.comuna.value = req.body.comuna.value
            }
            console.log(req.body.newE)
        }
    )
}
res.send('apiOwner/newEnterpriseCreate.ejs', { title: "FORM EMPRESA" + newWE })

}
module.exports = controller