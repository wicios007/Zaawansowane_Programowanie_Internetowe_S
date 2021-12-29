export class Link {
    private static _id: number = 0;
    public id: number;
    public hidden: boolean;
    constructor(
        public name: string,
        public url: string,
        public description: string,
    ) {
        this.hidden = false;
        this.id = Link._id++;
    }
}
