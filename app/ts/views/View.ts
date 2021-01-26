abstract class View<Generic>
{
    private _element: JQuery;

    constructor(seletor: string)
    {
        this._element = $(seletor);
    }

    update(model: Generic): void
    {
        this._element.html(this.template(model));
    }

    abstract template(model: Generic): string;
}