// Trabalhando com Herança, utilizar o 'protected' para as classes filhos acessar a classe pai que está o atributo.
//Classe abstrata 'abstract', previnindo de criar uma instância dessa classe, apenas com elementos filho que herdar.
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
