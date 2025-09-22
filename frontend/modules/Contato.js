import validator from 'validator';

export default class Contato {
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
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]'); 
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        this.clearErrors();
        
        if(this.emailInput && !validator.isEmail(emailInput.value)) {
            this.createError(emailInput, 'Email inválido.');
            error = true;
        }

        if(!nomeInput.value) {
            this.createError(nomeInput, 'Nome é um campo obrigatório');
            error = true;
        }

        if(!emailInput.value && !telefoneInput.value) {
            this.createError(emailInput, 'Pelo menos um contato precisa ser enviado: email ou telefone.');
            this.createError(telefoneInput, 'Pelo menos um contato precisa ser enviado: email ou telefone.');
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