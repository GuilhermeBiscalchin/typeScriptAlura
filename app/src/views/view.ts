// Trabalhando com Herança, utilizar o 'protected' para as classes filhos acessar a classe pai que está o atributo.

import { inspect } from "../decorators/inspect";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao";

//Classe abstrata 'abstract', previnindo de criar uma instância dessa classe, apenas com elementos filho que herdar.

//Protegendo o template, com Expressão Regular, ? opcional não funciona como primeiro parâmetro.

export abstract class View<T> {
    protected elemento : HTMLElement;
   

    constructor(seletor:string){
        const elemento = document.querySelector(seletor)
        if(elemento){
            this.elemento = elemento as HTMLElement
        }else{
            throw Error(`Seletor ${seletor} não exite no DOM!!!`)
        }
      
    }

    protected abstract template(model: T): string 
    @logarTempoDeExecucao(true)
    @inspect
    public update(model:T): void{

        //testando a performance.
        const t1 = performance.now()

        let template = this.template(model)
       
        this.elemento.innerHTML = template;

        //comparativo da performance
        const t2 = performance.now()
        console.log(`Tempo de execução do método update: ${(t2 - t1) / 1000} segundos`)
    }
}

