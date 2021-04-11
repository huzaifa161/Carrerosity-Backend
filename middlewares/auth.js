require('dotenv').config();
const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            throw new Error('UnAuthorized');
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = {
           email: decodedToken.email,
           userId: decodedToken._id 
        };
        next();
    } catch (error) {
      res.status(401).json({ message: "Auth failed!" });
    }
  };