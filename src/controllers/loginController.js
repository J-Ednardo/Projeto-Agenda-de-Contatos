const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
    return;
};

exports.register = async (req, res) => {
    try{
        const login = new Login(req.body);
        await login.register();

        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login/index');
            });
            return;
        };

        req.flash('success', 'Usuário criado com sucesso!');
        req.session.save(() => {
            return res.redirect('/login/index');
        });

        
    } catch(e) {
        console.log(e);
        return req.render('404');
    }
    
    
};