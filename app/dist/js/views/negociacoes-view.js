// criação do arquivo
// Um método template que sempre retorna uma 'String'
// Escrevendo em HTML, o modelo que vai ser executado na tela, utilizando classe do bootstrap.
//Realizando o teste para verificar se está correto.
// Reserva um espaço no HTML, para enviar o template criado aqui.
// O construtor, quando chamar no controller, vai pedir um seletor,que está definido no construtor,e dessa forma passa o 'id' criado no HTML para funcionar.
import { View } from './view.js';
export class NegociacoesView extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
            return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}
                            </td>
                            <td>
                                ${negociacao.quantidade}
                            </td>
                            <td>
                                ${negociacao.valor}
                            </td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    //método para formataro lodel da lista de Data
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
