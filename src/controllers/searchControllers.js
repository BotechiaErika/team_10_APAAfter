let controller = {
    searchAny: (req, res) => {
        res.render('search/search_00', { title: 'todas  categorias' });
    },
    listZone: (req, res) => {
            res.render('products/telos/telos_00.ejs', { title: 'todas  categorias' });
        }
        // searchPrice: (req, res) => {
        //     req.query.precio;
        //     res.send('Busqueda PRECIO');

};
module.exports = controller