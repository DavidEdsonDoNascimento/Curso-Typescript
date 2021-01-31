import { NegociacaoController } from './../controllers/NegociacaoController';

var negociacaoController = new NegociacaoController();

$('.form').submit(negociacaoController.adicionar.bind(negociacaoController));
