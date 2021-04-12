const express = require('express')
const ficheController = require('../controllers/fichedefrais.controller') // LES 2 .. PERMETTENT DE SORTIR DU DOSSIER
let router = express()


// AFFICHAGE
router.get('/:id/:mois', ficheController.search)
router.get('/all', ficheController.searchAll)

// CREATION 
router.post('/', ficheController.addFiche)
router.post ('/addl', ficheController.addLigne)
router.post ('/addlhors', ficheController.addLigneHorsForfait)

// MODIFICATION
router.put('/:id/:mois', ficheController.updateFiche)
router.put('/:id/ligne', ficheController.updateLigne)
router.put('/:id/lignehors', ficheController.updateLigneHorsForfait)

// SUPPRESSION
router.delete('/delete/:id/:mois', ficheController.deleteFiche)
router.delete('/delete/:id/:mois/ligne', ficheController.deleteLigne)
router.delete('/delete/:id/:mois/lignehors', ficheController.deleteLigneHorsForfait)


// EXPORT DU ROUTEUR POUR POUVOIR L APPELER DS INDEX.JS ET LE LIER A UNE URL
module.exports = router
