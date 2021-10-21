import { AutorTable } from "./GetData";
import { GetValueZad4 } from './GetValueZad4';
import { ImportDataJSON } from './ImportDataJSON';

function main(){
    const tabela = new AutorTable('id-tabeli');
    const zad4 = new GetValueZad4('num','add','sub');
    const zad5 = new ImportDataJSON('data.json', 'viewOption','tableList','listNum','listDots');
}

main()