class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesViews = new NegociacoesView('#negociacoes');
        this._mensagemView = new MensagemView('#mensagem');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesViews.update(this._negociacoes);
    }
    adicionar(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adicionar(negociacao);
        this._negociacoesViews.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
    listar() {
        this._negociacoes.listar().forEach(negociacao => {
            console.log(negociacao);
        });
    }
}
