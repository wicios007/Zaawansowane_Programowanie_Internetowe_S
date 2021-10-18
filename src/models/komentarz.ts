export class Komentarz {
    private _tresc: string;
    private _data: Date;
    private _odpowiedzi: Komentarz[];
    private _nick: string;

    get Tresc(): string {
        return this._tresc;
    }

    set Tresc(value: string) {
        this._tresc = value;
    }

    get Data(): Date {
        return this._data;
    }

    set Data(value: Date) {
        this._data = value;
    }

    get Nick(): string {
        return this._nick;
    }

    set Nick(value: string) {
        this._nick = value;
    }

    constructor(tresc: string, nick: string) {
        this._tresc = tresc;
        this._nick = nick;
    }

    dodajOdpowiedz(odpowiedz: Komentarz): void {
        this._odpowiedzi.push(odpowiedz);
    }

    pobierzOdpowiedzi(): Komentarz[] {
        return this._odpowiedzi;
    }
}