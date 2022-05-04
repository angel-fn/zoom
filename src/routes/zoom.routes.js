const { Router } = require('express'); //importamos y requerimos de la biblioteca express
const router = Router();

router.get('/', (req, res) => {    //para que nos cargue una pagina
    res.redirect('index.html');   //nos cargar el fichero index.html
})

module.exports = router;