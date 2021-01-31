import { MensagemView } from './../views/MensagemView';
import { NegociacoesView } from './../views/NegociacoesView';
import { Negociacoes } from './../models/Negociacoes';
import { Negociacao } from './../models/Negociacao';

export class NegociacaoController
{
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesViews = new NegociacoesView('#negociacoes');
    private _mensagemView = new MensagemView('#mensagem');
    
    constructor()
    {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesViews.update(this._negociacoes);
    }

    adicionar(event: Event) : void {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g,',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        this._negociacoes.adicionar(negociacao);
        this._negociacoesViews.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    listar(): void
    {
        this._negociacoes.listar().forEach(negociacao => {
            console.log(negociacao);
        });
    }
    
}