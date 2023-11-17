import { TorresInputType } from "../types/torresInput";
import { UnidadeInputType } from "../types/unidadesInput";
import { Empreendimentos } from "./empreedimentos";

export interface ITorres {
    addEmpreendimentos(empreendimento: Empreendimentos): void
}

export class Torres {

    data: TorresInputType

    constructor(input: Omit<TorresInputType, "unidades">) {
        this.data = { ...input, unidades: [] };
    }

    addUnidade(unidade: Omit<UnidadeInputType, "torre_id">) {
        this.data.unidades.push(unidade);
    }

    get id(): number | undefined {
        return this.data.id;
    }

    get empreendimento_id(): number {
        return this.data.empreendimento_id;
    }

    get nome(): string {
        return this.data.nome;
    }

    getAll() {
        const { id, nome, unidades } = this.data;
        return {
            id,
            nome,
            unidades
        };
    }
}