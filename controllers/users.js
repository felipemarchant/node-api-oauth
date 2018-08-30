module.exports = {
    login: async (req, res, next) =>{
        console.log('Login');
    },
    register: async () => {
        console.log('Register');
    },
    secret: async (req, res, next) => {
        console.log('Secret');
    }
}