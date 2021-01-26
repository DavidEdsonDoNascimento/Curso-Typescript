abstract class View<Generic>
{
    private _element: Element;

    constructor(seletor: string)
    {
        this._element = document.querySelector(seletor);
    }

    update(model: Generic): void
    {
        this._element.innerHTML = this.template(model);
    }

    abstract template(model: Generic): string;
}