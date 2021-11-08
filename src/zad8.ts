class Node<T> {
    value: T
    leftNode?: Node<T>;
    rightNode?: Node<T>;

    constructor(val: T) {
        this.value = val;
    }
}

export class Zad8 {
    constructor() {
        const tree = new Node(2);
        console.log(tree.leftNode?.value);
    }
}