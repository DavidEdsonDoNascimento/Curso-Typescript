class NegociacaoController
{
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesViews = new NegociacoesView('#negociacoes');
    
    constructor()
    {
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._negociacoesViews.update(this._negociacoes);
    }

    adicionar(event: Event) : void {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g,',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
        this._negociacoes.adicionar(negociacao);
        this._negociacoesViews.update(this._negociacoes);
    }

    listar(): void
    {
        this._negociacoes.listar().forEach(negociacao => {
            console.log(negociacao);
        });
    }
    
}