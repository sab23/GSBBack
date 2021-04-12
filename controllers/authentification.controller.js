const {response} = require('express')        // CONTROLLER GERE LE MODEL
const userModel = require('../models/users.model')
const createAccessToken = require('../config/token')

const searchByLogin = (request, response) => {
    try{
        const {login, mdp} = request.body
            userModel.searchByLogin(login, async (err, result) => {
                if(err) response.status(403).send({error: 'Forbiden'})
                else{
                    if(mdp == result[0].mdp){
                        const token = await createAccessToken(result[0])
                        response.json({token})
                    }else{
                        response.status(403).send({error: 'Forbiden'})
                    }
                }
            }) 
        
    }catch(e) {
        console.error(e)
        
    }
}


module.exports = {
    searchByLogin
}





/* COURS SUR LES TABLEAUX

/* const {
    response
} = require("express")

let dbUsers = [{
    id: 0,
    name: 'Barbosa Pinto',
    firstname: 'Hugo'
}]

/*
function search(id) {           // FONCTION SEARCH HISTORIQUE

}


const search = (id) => { // => REPRESENTE LA FONCTION => EVOLUTION DU LANGAGE VS
    let userFound
    if (dbUsers.length > 0) { // ON VERIFIE SI NOTRE TABLEAU CONTIENT BIEN
        dbUsers.map((user, i) => { // UN USER ET SON INDEX i   // SI OUI ON PARCOURS NOTRE TABLEAU "FOREACH"
            if (user.id == id) {
                userFound = user
            }
        })
        console.log(found)
        if (found == false) dbUsers.push(user)
        return found == false ? user : null


    }
    return userFound ? userFound : null // ? (SI) SI USER EST VALORISER ON RETOURNE USER ; SINON (:) ON RETURN NULL
    // ? : OPERATEUR TERNAIRE  REMPLACE LE IF
}

const searchHugo = (id => {
    let userFound
    if (dbUsers.length > 0) {
        for (let i; i < dbUsers.length; i++) {
            if (dbUsers[i].id == id) {
                userFound = dbUsers[i]
            }
        }
    }
    return userFound ? userFound : null
    /*
    let a = 0
    let b = 1
    return a > b ? a : null    // SI a > b  ON RETURN a SINON RETURN b   
    
})

const searchAll = () => {
    return dbUsers
}

const add = (user) => {
    let found = false
    dbUsers.map((user) => {
        if (user.id == user.id) {
            found = true
        }
    })
    if (found == false) dbUsers.push(user)

}

const addHugo = (user) => {
    let found = false
    for (let i = 0; i < dbUsers.length; i++) {
        if (dbUsers[i].id == user.id) {
            found = true
        }
    }
    if (found == false) dbUsers.push(user)
    return found == false ? user : null
}

const remove = (user) => {
    for (let i = 0; i < dbUsers.length; i++) {
        if (dbUsers[i].id == user.id) {
            found = true
            dbUsers.splice(dbUsers[i])
        }
    }
}

const modify = (user) => { 
    for(let i = 0 ; i < dbUsers.length; i++) {
          if (dbUsers[i].id == user.id) {
            
            dbUsers[i].name = user.name
            dbUsers[i].firstname = user.firstname            
    }  
    }     
}


module.exports = {
    search,
    searchHugo,
    searchAll,
    add,
    addHugo,
    remove,
    modify
}
*/

