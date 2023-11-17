import { TipoUnidadeEnum } from "../../enum/tipoUnidade";
import { IEmpreendimentosRepository } from "../repository/empreendimento";
import { ITorresRepository } from "../repository/torres";
import { IUnidadesRepository } from "../repository/unidades";
import { IUnidadesVagasGaragemRepository } from "../repository/unidadesVagasGaragem";


export interface IPersistDataService {
    execute({ realties, buildings, units }: any): void
    persistEmpreendimento(empreendimentos: any): void
    persistTorre(torres: any): void
    persistUnidade(unidades: any): void
}

export class PersistDataService {

    vagasGaragemIds: any = [];

    constructor(
        readonly empreendimentos: IEmpreendimentosRepository,
        readonly torres: ITorresRepository,
        readonly unidades: IUnidadesRepository,
        readonly vagas: IUnidadesVagasGaragemRepository
    ) {

    }

    async execute({ realties, buildings, units }: any) {
        await this.persistEmpreendimento(realties)
        await this.persistTorre(buildings)
        await this.persistUnidade(units)
        await this.persistUnidadeVagas();
        return true
    }

    async persistEmpreendimento(empreendimentos: any) {
        for await (const empreendimento of empreendimentos) {

            const input = {
                id: empreendimento.id,
                nome: empreendimento.title,
            }

            await this.empreendimentos.create(input)
        }
    }

    async persistTorre(torres: any) {

        for await (const torre of torres) {
            const input = {
                empreendimento_id: torre.realtyId,
                nome: torre.title,
                id: torre.id,
            }

            await this.torres.create(input);
        }
    }

    async persistUnidade(unidades: any) {
        for await (const unidade of unidades) {

            const input = {
                id: unidade.id,
                torre_id: unidade.buildingId,
                numero: unidade.number,
                andar: unidade.floor,
                tipo: unidade.type === "apartment" ? TipoUnidadeEnum.APARTAMENTOS : TipoUnidadeEnum.VAGAS
            }

            if (unidade.type === "apartment" && unidade.parkingSpaceIds) {
                unidade.parkingSpaceIds.map((item: any) => {
                    const objetosVagas: any = {
                        unidade_id: unidade.id,
                        vaga_de_garagem_id: item
                    };
                    this.vagasGaragemIds.push(objetosVagas)
                })
            }

            this.unidades.create(input);

        }
    }

    async persistUnidadeVagas() {
        for await (const vaga of this.vagasGaragemIds) {
            await this.vagas.create(vaga);
        }
    }

}