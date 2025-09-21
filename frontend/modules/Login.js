import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;

        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]').value;
        const passwordInput = el.querySelector('input[name="password"]').value; 
        let error = false;
        
        if(!validator.isEmail(emailInput)) {
            alert('Email inválido');
            error = true;
        }

        if(passwordInput.length < 3 || passwordInput.length > 50) {
            alert('Senha precisa ter entre 3 e 50 caracteres');
            error = true;
        }

        if(!error) {
            el.submit();
        }
    }
}