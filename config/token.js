var jwt = require('jsonwebtoken')

const createAccessToken = (user) => {
    return new Promise((resolve, reject) => {
        if(user.id === undefined) reject('credentials not valid')
        else{
            const signedUser = {
                login: user.login,
                id: user.id
            }
            jwt.sign(signedUser, "ppe", {expiresIn: '1d'}, (error, token) => {
                if(error) reject(error)
                else resolve(token)
            })
        }
    })
}

module.exports = createAccessToken