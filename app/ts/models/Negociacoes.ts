import { Negociacao } from './Negociacao';

export class Negociacoes
{
    private _negociacoes: Negociacao[] = [];

    adicionar(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }
    
    listar(): Negociacao[]
    {
        return this._negociacoes;
    }
}