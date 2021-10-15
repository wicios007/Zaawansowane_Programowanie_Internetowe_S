class Autor {
    private _id: number 
    private _imie: string
    private _nazwisko: string
    private _email: string 

    get imie(): string {return this._imie}
    get nazwisko(): string {return this._nazwisko}
    get email(): string {return this._email}

    constructor(imie: string, nazwisko: string, id: number, email: string){
        this._imie = imie
        this._nazwisko = nazwisko
        this._id = id
        this._email = email
    }
}
