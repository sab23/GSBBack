const {response} = require('express')        // CONTROLLER GERE LE MODEL
const ficheModel = require('../models/fichedefrais.model')



const search = (request, response) => {
    ficheModel.search(request.params.idutilisateur, request.params.mois, (err, result) => {
        response.json({result})
    })
}
const searchAll = (request, response) => {
    ficheModel.searchAll((err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}

const addFiche = (request, response) => {
    var body = request.body
    ficheModel.addFiche(body, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}

const addLigne = (request, response) => {
    var body = request.body
    ficheModel.addLigne(body, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}

const addLigneHorsForfait = (request, response) => {
    var body = request.body
    ficheModel.addLigneHorsForfait(body, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}



/* request.params.id RECUPERE ID SUR POSTMAN*/
const updateFiche = (request, response) => {
    var body = request.body
    ficheModel.updateFiche(request.params.id, request.params.mois, body, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}

const updateLigne = (request, response) => {
    var body = request.body
    ficheModel.updateLigne(request.params.id, request.params.mois, body, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}

const updateLigneHorsForfait = (request, response) => {
    var body = request.body
    ficheModel.updateLigneHorsForfait(request.params.id, request.params.mois, body, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}

const deleteFiche = (request, response) => {  
        ficheModel.deleteFiche(request.params.id, request.params.mois, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}

const deleteLigne = (request, response) => {  
    ficheModel.deleteLigne(request.params.id, request.params.mois, (err, result) => {
    if (err) response.json(err)
    else response.json({result})
})
}

const deleteLigneHorsForfait = (request, response) => {  
    ficheModel.deleteLigneHorsForfait(request.params.id, request.params.mois, (err, result) => {
    if (err) response.json(err)
    else response.json({result})
})
}

module.exports = {
    search,
    searchAll,
    addFiche,
    addLigne,
    addLigneHorsForfait,
    updateFiche,
    updateLigne,
    updateLigneHorsForfait,
    deleteFiche,
    deleteLigne,
    deleteLigneHorsForfait

}