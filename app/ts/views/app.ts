import { NegociacaoController } from './../controllers/negociacao-controller';

const negociacaoController = new NegociacaoController();

$('.form').on('submit', event => {
    event.preventDefault();
    negociacaoController.adicionar();
    console.log('teste');
});