class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesViews = new NegociacoesView('#negociacoes');
        this._mensagemView = new MensagemView('#mensagem');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesViews.update(this._negociacoes);
    }
    adicionar(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
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
