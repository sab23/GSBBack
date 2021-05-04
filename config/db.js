const mysql = require("mysql2");
const connection = mysql.createConnection({ 
  connectionLimit: 5,
  host     : 'cj654063-002.dbaas.ovh.net',
  port     : 35305,
  user     : 'gsbayache',
  password : 'gsbayacheSU2020',
  database : 'gsbayache'
});
 
module.exports = connection   // ON EXPORTE CETTE CONNEXION POUR POUVOIR L UTILISER AILLEURS
