import { IEmpreendimentosRepository } from "../../../src/application/repository/empreendimento";
import { ITorresRepository } from "../../../src/application/repository/torres";
import { IUnidadesRepository } from "../../../src/application/repository/unidades";
import { IUnidadesVagasGaragemRepository } from "../../../src/application/repository/unidadesVagasGaragem";

class Repository implements IEmpreendimentosRepository, ITorresRepository, IUnidadesRepository, IUnidadesVagasGaragemRepository {

    async create(data: any): Promise<any> {
        return true
    }
}

export const repository = new Repository();

