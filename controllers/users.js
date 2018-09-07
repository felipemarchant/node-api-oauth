const User = require('../model/user');
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

        res.json({ user : "Created!" });
    },
    secret: async (req, res, next) => {
        console.log('Secret');
    }
}