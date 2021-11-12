// Trabalhando com Herança, utilizar o 'protected' para as classes filhos acessar a classe pai que está o atributo.

//Classe abstrata 'abstract', previnindo de criar uma instância dessa classe, apenas com elementos filho que herdar.

//Protegendo o template, com Expressão Regular, ? opcional não funciona como primeiro parâmetro.

export abstract class View<T> {
    protected elemento : HTMLElement;
    private escapar = false;

    constructor(seletor:string, escapar?:boolean){
        this.elemento = document.querySelector(seletor)
        if(escapar){
            this.escapar = escapar
        }
    }

    protected abstract template(model: T): string 

    public update(model:T): void{
        let template = this.template(model)
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/,'');
        }
        this.elemento.innerHTML = template;
    }
}

