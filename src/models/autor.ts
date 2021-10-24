export class Author {
    static identifier = 0;

    private _id: number;
    private _first_name: string;
    private _last_name: string;
    private _email: string;

    get FirstName(): string {
        return this._first_name;
    }

    set FirstName(value: string) {
        this._first_name = value;
    }

    get LastName(): string {
        return this._last_name;
    }

    set LastName(value: string) {
        this._last_name = value;
    }

    get Email(): string {
        return this._email;
    }

    set Email(value: string) {
        this._email = value;
    }

    constructor(first_name: string, last_name: string) {
        this._first_name = first_name;
        this._last_name = last_name;
        this._id = Author.identifier++;
    }
}