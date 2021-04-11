require('dotenv').config()
const crypto = require('crypto');
const User = require('../models/User')
const { v4: uuidv4 } = require('uuid');

const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const userExists = await User.findOne({ email });
        if(!userExists) return res.json({
            statusCode: 404,
            message:"Email Address not Found"
        });

        const [hash] = await genSalt(password, userExists.salt);
        const isMatch = userExists.password === hash;
        if(isMatch){
            const { _id, email, fullName } = userExists;
            const token = jwt.sign({ _id, email, fullName },process.env.JWT_SECRET, { expiresIn:'1d' } )
            return res.json({
                statusCode: 200,
                message:"Successfully Login",
                data: { token, _id, email, expiresIn: Date.now() + (24 * 3600000) }
            });
        }
        return res.json({
            statusCode: 401,
            message:"Email or Password is Incorrect"
        });
    }catch(err){
        console.log('err',err)
        return res.json({
            statusCode: 400,
            message:"Something Went Wrong"
        });
    }
}


exports.signUp = async (req, res) => {
    try{
        const { fullname, email, password } = req.body;
        const userExists = await User.findOne({ email }).exec();
        if(userExists){
            return res.json({
                statusCode: 409,
                message:"Email Already Exists"
            });
        }

        const user = new User({ fullname, email, password });
        const [hash, salt] = await genSalt(password)
        user.password = hash;
        user.salt = salt;

        await user.save();
        return res.json({
            statusCode: 200,
            message:"Signup Successful"
        });

    }catch(err){
        return res.json({
            statusCode: 400,
            message:"Something Went Wrong"
        });
    }
}

const genSalt = (password, salt = uuidv4()) =>  new Promise((resolve, reject) => {
    const hash =  crypto.createHmac('SHA1', salt).update(password).digest('hex');
    resolve([hash, salt])
});
