
const jwt = require("jsonwebtoken");
module.exports = {
    generateToken: function (payload){
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '1h'
        });
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET);
        return {accessToken, refreshToken}
    },
    TokenDecode: function (accessToken){
        try {
            return jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        }
        catch (error){
            if (error instanceof jwt.TokenExpiredError){
                console.log('Ok');
            }
            return null;
        }
    }
}
