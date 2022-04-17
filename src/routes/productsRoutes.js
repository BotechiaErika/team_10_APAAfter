const productsController = require('./../controllers/productsController.js')
const express = require('express')
const router = express.Router()
router.get('/', productsController.index)
router.get('/comuna-:comunaID', productsController.comunasP)
router.get('/local-:idLocal', productsController.detallesL)
router.get('/local-:idLocal/:idRooms', productsController.detallesR)
router.get('/CABA', productsController.listCABA)
module.exports = router

/* /

/products (GET)
Listado de productos
2. /products/create (GET)
Formulario de creación de productos
3. /products/:id (GET)
Detalle de un producto particular
4. /products (POST)
Acción de creación (a donde se envía el formulario)
5. /products/:id/edit (GET)
Formulario de edición de productos
6. /products/:id (PUT)
Acción de edición (a donde se envía el formulario):
7. /products/:id (DELETE)
Acción de borrado
○ Se deberán mostrar los productos separados en dos secciones. Los últimos
visitados y los productos en oferta.

● /products
○ Se deberán listar todos los productos presentes en la base de datos JSON.
● /products/:id
○ Detalle de producto. Cada producto deberá contar con dos botones de
acción: BORRAR y MODIFICAR.

● /products/create
○ Mostrará el formulario de creación para un producto.
● /products/
○ Deberá recibir los datos del formulario de creación.
● /products/edit/:id
○ Botón MODIFICAR: modificará al producto correspondiente en la base de
datos JSON.
● /products/
○ Deberá recibir los datos del formulario de edición.
● /products/:id
○ Botón BORRAR: eliminará al producto de la base de datos JSON.  */