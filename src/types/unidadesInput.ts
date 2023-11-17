import { TipoUnidadeEnum } from "../enum/tipoUnidade"

export type UnidadeInputType = {
    id?: number,
    torre_id: number,
    andar: number,
    numero: string,
    tipo: TipoUnidadeEnum,
    vagasDeGaragemIds: number[] | []
}