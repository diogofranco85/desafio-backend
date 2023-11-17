import { IPersistDataService } from "../../../src/application/service/persistData";

class PersistaData implements IPersistDataService {

    execute({ realties, buildings, units }: any): void {
        this.persistEmpreendimento(realties);
        this.persistTorre(buildings);
        this.persistUnidade(units);
    }

    persistEmpreendimento(empreendimentos: any): void { }

    persistTorre(torres: any): void { }

    persistUnidade(unidades: any): void { }
}

export const persistData = new PersistaData();