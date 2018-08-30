module.exports = {
    login: async (req, res, next) =>{
        res.status(200).json(req.value.body);
        console.log('Login');
    },
    register: async () => {
        console.log('Register');
    },
    secret: async (req, res, next) => {
        console.log('Secret');
    }
}