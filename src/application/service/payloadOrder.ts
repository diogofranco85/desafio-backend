import { Empreendimentos } from "../../domain/empreedimentos";
import { Torres } from "../../domain/torres";
import { Unidades } from "../../domain/unidades";
import { TipoUnidadeEnum } from "../../enum/tipoUnidade";

export interface IPayloadOrderService {
    execute(payload: any): object
}

export class PayloadOrderService implements IPayloadOrderService {

    execute(payload: any): object {

        const empreendimentos = [];

        if (payload.realties) {
            for (const empreendimento of payload.realties) {

                const empreendimentoObject = {
                    nome: empreendimento.title,
                    id: empreendimento.id
                }

                const outputEmpreendimentos = new Empreendimentos(empreendimentoObject)

                if (payload.buildings) {
                    for (const building of payload.buildings) {
                        if (building.realtyId === empreendimento.id) {

                            const torreObject = {
                                empreendimento_id: building.realtyId,
                                nome: building.title,
                                id: building.id,
                            }

                            const outputTorre = new Torres(torreObject)

                            if (payload.units) {
                                for (const unit of payload.units) {
                                    if (unit.buildingId === building.id) {

                                        const unidadeObject = {
                                            id: unit.id,
                                            torre_id: unit.buildingId,
                                            numero: unit.number,
                                            andar: unit.floor,
                                            tipo: unit.type === "apartment" ? TipoUnidadeEnum.APARTAMENTOS : TipoUnidadeEnum.VAGAS,
                                            vagasDeGaragemIds: unit.parkingSpaceIds || []
                                        }

                                        const outputUnidade = new Unidades(unidadeObject)

                                        outputTorre.addUnidade(outputUnidade.getAll());
                                    }
                                }
                            }


                            outputEmpreendimentos.addTorre(outputTorre.getAll())
                        }
                    }
                }


                empreendimentos.push(outputEmpreendimentos.getAll());
            }
        }

        return empreendimentos;
    }
}