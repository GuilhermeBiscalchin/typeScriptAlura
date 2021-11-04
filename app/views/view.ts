// Trabalhando com Herança, utilizar o 'protected' para as classes filhos acessar a classe pai que está o atributo.

//Classe abstrata 'abstract', previnindo de criar uma instância dessa classe, apenas com elementos filho que herdar.

export abstract class View<T> {
    protected elemento  :HTMLElement;

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor)
    }

    abstract template(model: T): string 

    update(model:T): void{
        const template = this.template(model)
        this.elemento.innerHTML = template;
    }
}

