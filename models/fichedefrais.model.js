const connection = require('../config/db')  // IMPORTE CONNEXION


const addFiche = (fiche, callback) => {
    
    var query =  'INSERT INTO fichefrais (idutilisateur, mois, nbJustificatifs, montantValide, dateModif, idEtat) VALUES (?)'
    var values = [fiche.idutilisateur, fiche.mois, fiche.nbJustificatifs, fiche.montantValide, fiche.dateModif, fiche.idEtat]
    connection.query(query, [values], callback)
    
}
const addLigne = (ligne, callback) => {
    var query = 'INSERT INTO lignefraisforfait (idutilisateur, mois, idFraisForfait, quantite) VALUES (?)'
    var values = [ligne.idutilisateur, ligne.mois, ligne.idFraisForfait, ligne.quantite]
    connection.query(query, [values], callback)
}

const addLigneHorsForfait = (ligne, callback) => {
    var query = 'INSERT INTO lignefraishorsforfait (idutilisateur, mois, libelle, date, montant) VALUES (?)'
    var values = [ligne.idutilisateur, ligne.mois, ligne.libelle, ligne.date, ligne.montant]
    connection.query(query, [values], callback)
}


const updateFiche = (idutilisateur, mois, fiche, callback) => {
    
    var query =  'UPDATE fichefrais SET nbJustificatifs=(?), montantValide=(?), dateModif=(?), idEtat=(?) WHERE idutilisateur= (?) AND mois= (?)'
    var values = [fiche.nbJustificatifs, fiche.montantValide, fiche.dateModif, fiche.idEtat, idutilisateur, mois]
    connection.query(query, values, callback)
    
}

const updateLigne = (idutilisateur, fiche, callback) => {
    
    var query = 'UPDATE lignefraisforfait SET mois=(?), idFraisForfait=(?), quantite=(?) WHERE idutilisateur= (?)'
    var values = [ligne.idutilisateur, ligne.mois, ligne.idFraisForfait, ligne.quantite]
    connection.query(query, values, callback)
    
}

const updateLigneHorsForfait = (idutilisateur, mois, fiche, callback) => {
    
    var query = 'UPDATE lignefraishorsforfait SET mois=(?), idFraisForfait=(?), libelle=(?), montant=(?) WHERE idutilisateur= (?)'
    var values = [ligne.idutilisateur, ligne.mois, ligne.idFraisForfait, ligne.quantite]
    connection.query(query, values, callback)
    
}

const deleteFiche = (idutilisateur, mois, callback) => {
    
    var query1 =  'DELETE FROM fichefrais WHERE idutilisateur= (?) AND mois= (?)'
    connection.query(query1, idutilisateur, mois, callback)
   
}

const deleteLigne = (idutilisateur, mois, callback) => {
    
    var query1 =  'DELETE FROM lignefraisforfait WHERE idutilisateur= (?)'
    connection.query(query1, idutilisateur, callback)
}

const deleteLigneHorsForfait = (idutilisateur, callback) => {
    
    var query1 =  'DELETE FROM lignefraishorsforfait WHERE idutilisateur= (?)'
    connection.query(query1, idutilisateur, callback)
}

const search = (idutilisateur, mois, callback) => {       // PREND EN PARAMETRE UN CALL BACK 
    
        // CONNEXION A LA BDD
    connection.query('SELECT * FROM fichefrais WHERE idutilisateur= (?) AND mois= (?)', [idutilisateur, mois], callback)
       // FERMETURE CONNEXION A LA BDD
}

const searchAll = (callback) => {       // PREND EN PARAMETRE UN CALL BACK 
    
      // CONNEXION A LA BDD
    connection.query('SELECT * FROM fichefrais', callback)
       // FERMETURE CONNEXION A LA BDD
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
    deleteLigneHorsForfait
}
