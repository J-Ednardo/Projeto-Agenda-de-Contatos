import validator from 'validator';

export default class CadastroContato {
    constructor(formclass) {
        this.form = document.querySelector(formclass);
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
        const nome = el.querySelector('input[name="nome"]');
        const email = el.querySelector('input[name="email"]');
        const telefone = el.querySelector('input[name="telefone"]');
        let error = false;

        this.clearErrors();

        if(!nome.value) {
            this.createError(nome, 'Nome é um campo obrigatório');
            error = true;
        }

        if(!email.value && !telefone.value) {
            this.createError(email, 'Pelo menos um contato precisa ser enviado: email ou telefone.');
            this.createError(telefone, 'Pelo menos um contato precisa ser enviado: email ou telefone.');
            error = true;
        }

        if(email.value && !validator.isEmail(email.value)) {
            this.createError(email, 'Email inválido.');
            error = true;
        }
        
        if(!error) {
            el.submit();
        }
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div)
    }

    clearErrors() {
        const errorMenssages = this.form.querySelectorAll('.error-text');
        errorMenssages.forEach(errorEl => {
            errorEl.remove();
        })
    }
}