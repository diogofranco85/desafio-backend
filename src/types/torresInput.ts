import { UnidadeInputType } from "./unidadesInput"

export type TorresInputType = {
    id?: number,
    empreendimento_id: number,
    nome: string,
    unidades: Omit<UnidadeInputType, "torre_id">[]
}