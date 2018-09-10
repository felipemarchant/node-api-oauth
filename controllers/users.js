const JWT  = require('jsonwebtoken');
const User = require('../model/user');
const { JWT_SECRETS } = require('../configuration');

signToken = user => {
    return token = JWT.sign({
        iss: 'ApiNode',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRETS );
};

module.exports = {
    login: async (req, res, next) =>{
        res.status(200).json(req.value.body);
        console.log('Login');
    },
    register: async (req, res, next) => {
        const { email, password } = req.value.body;

        let findToUser = await User.findOne({ email });
        if(findToUser)
        {
            return res.status(403).json({ error: 'Email já esta sendo usado!' });
        }

        const newUser = new User({ email, password });
        await newUser.save();

        const token = signToken(newUser);

        res.status(200).json({ token });
    },
    secret: async (req, res, next) => {
        console.log('Secret');
        res.json({ secret : 'Secret Resource' });
    }
}