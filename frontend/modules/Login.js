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
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]'); 
        let error = false;

        this.clearErrors();
        
        if(!validator.isEmail(emailInput.value)) {
            this.createError(emailInput, 'Email inválido.');
            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            this.createError(passwordInput, 'Senha precisa ter entre 3 e 50 caracteres.');
            error = true;
        }

        if(!error) {
            el.submit();
        }
    }

    createError (field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div); 
    }

    clearErrors() {
        const errorMenssages = this.form.querySelectorAll('.error-text');
        errorMenssages.forEach(errorEl => {
            errorEl.remove();
        });
    }
}