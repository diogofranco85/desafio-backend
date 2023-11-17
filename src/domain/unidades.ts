import { TipoUnidadeEnum } from "../enum/tipoUnidade";
import { TorresInputType } from "../types/torresInput";
import { UnidadeInputType } from "../types/unidadesInput";
import { Torres } from "./torres";

export class Unidades {

    data: UnidadeInputType;

    constructor(readonly input: UnidadeInputType) {
        this.data = input
    }

    get id(): number | undefined {
        return this.data.id;
    }

    get torre_id(): number {
        return this.data.torre_id;
    }

    get andar(): number {
        return this.data.andar;
    }

    get numero(): string {
        return this.data.numero;
    }

    get tipo(): TipoUnidadeEnum {
        return this.data.tipo;
    }

    getAll() {
        const { id, numero, andar, tipo, vagasDeGaragemIds } = this.data;
        return {
            id,
            numero,
            andar,
            tipo,
            vagasDeGaragemIds
        };
    }
}