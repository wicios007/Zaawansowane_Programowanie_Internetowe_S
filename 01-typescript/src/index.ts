import { Artykul } from './artykul';
import { Autor } from './autor';
import { Blog } from './blog'
import { Komentarz } from './komentarz'
import { IDataType } from './interfaces/IDataType'
import { Zad4 } from './zad4';
import { Zad5 } from './zad5'
// import authors from './dane.json';

function main() {
    var zad4 = new Zad4();
    var zad5 = new Zad5();
    zad5.getData();
    zad5.buildList();

}

main();


