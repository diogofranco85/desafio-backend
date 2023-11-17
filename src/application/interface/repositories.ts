import { IEmpreendimentosRepository } from "../repository/empreendimento";
import { ITorresRepository } from "../repository/torres";
import { IUnidadesRepository } from "../repository/unidades";

export interface IRepositories {
    empreendimento: IEmpreendimentosRepository,
    torre: ITorresRepository,
    unidade: IUnidadesRepository
}