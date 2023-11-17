import { EmpreendimentosInputType } from "../types/emprendimentos";
import { TorresInputType } from "../types/torresInput";

export class Empreendimentos {
    data: EmpreendimentosInputType;

    constructor(input: Omit<EmpreendimentosInputType, "torres">) {
        this.data = { ...input, torres: [] };
    }

    addTorre(torre: Omit<TorresInputType, "empreendimento_id">): void {
        this.data.torres.push(torre);
    }

    get id() {
        return this.data.id;
    }

    get nome() {
        return this.data.nome;
    }

    get torres() {
        return this.data.torres;
    }

    getAll(): EmpreendimentosInputType {
        const { id, nome, torres } = this.data;
        return {
            id,
            nome,
            torres: torres || []
        }
    }
}