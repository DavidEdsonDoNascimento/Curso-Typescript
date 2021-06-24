System.register(["./../views/MensagemView", "./../views/NegociacoesView", "./../models/Negociacoes", "./../models/Negociacao"], function (exports_1, context_1) {
    "use strict";
    var MensagemView_1, NegociacoesView_1, Negociacoes_1, Negociacao_1, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (NegociacoesView_1_1) {
                NegociacoesView_1 = NegociacoesView_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Negociacoes_1.Negociacoes();
                    this._negociacoesViews = new NegociacoesView_1.NegociacoesView('#negociacoes');
                    this._mensagemView = new MensagemView_1.MensagemView('#mensagem');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesViews.update(this._negociacoes);
                }
                adicionar(event) {
                    event.preventDefault();
                    const negociacao = new Negociacao_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adicionar(negociacao);
                    this._negociacoesViews.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
                listar() {
                    this._negociacoes.listar().forEach(negociacao => {
                        console.log(negociacao);
                    });
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
