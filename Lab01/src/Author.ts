class Author {
    private _id: number;
    private _name: string;
    private _surname: string;
    private _email!: string;

    constructor(name: string, surname: string, email: string) {
        // this._id = ??
        this._name = name;
        this._surname = surname;
        if(this.validateEmail(email))
            this._email = this._email;
    }

    get name(): string { return this._name; }
    set name(value: string) { this._name = value; }

    get surname(): string { return this._surname; }
    set surname(value: string) { this._surname = value; }

    get email(): string { return this._email; }
    set email(value: string) { if(this.validateEmail(this.email)) this._email = value; }

    private validateEmail(email) {
        let regex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';
        if(regex.match(email))
            return true
        return false
    }

    /**
     * parse
json: string     */
    public jsonParse(json: string) {
        return <Author[]>JSON.parse(json);
        // JSON.stringify
    }
}