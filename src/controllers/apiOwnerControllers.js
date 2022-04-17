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
        showUbyID: (req, res) => {
            let register_user = req.res.register_user
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
        },
        createLocal: (req, res) => {
            res.render('apiOwner/newEnterprise.ejs', { title: "FORM EMPRESA" })
        },
        storeLocal: (req, res) => {

                class CreateTelo {
                    constructor() {
                        this.nameHotel = req.body.nameHotel,
                            this.emailHotel = req.body.emailHotel,
                            this.telephoneHotel = req.body.telephoneHotel,
                            this.webPageHotel = req.body.webPageHotel,
                            this.addressHotel = req.body.addressHotel,
                            this.parkingHotel = req.body.parkingHotel,
                            this.comuna = `Comuna: + ${req.body.comuna}`
                        this.comuna = `Comuna: + ${req.body.comuna}`
            let newEJSON = fs.readFileSync(__dirname, "./newEJSON")
