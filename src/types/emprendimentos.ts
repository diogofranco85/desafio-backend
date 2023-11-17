import { TorresInputType } from "./torresInput"

export type EmpreendimentosInputType = {
    id: number,
    nome: string,
    torres: Omit<TorresInputType, "empreendimento_id">[]
}