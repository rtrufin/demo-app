class User {
    constructor(data) {
        this.data = data;
    }

    getUser(email, password) {
        const user = this.data.find(user => user.email === email && user.password === password);
        return user;
    }
}

module.exports = function (app, data) {
    app.post('/authenticate', (req, res) => {
        const {
            email,
            password
        } = req.body;
        const user = new User(data).getUser(email, password);
        console.log(email, password);
        if (user) {
            const {password, ...response} = user;
            res.status(200).send(response);
        } else {
            res.status(401).send({
                error: 'User not found'
            });
        }
    })
};