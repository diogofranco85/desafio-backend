import { IConnection } from "../../infra/database";
import { Exception } from "../../shared/exception";
import { EmpreendimentosInputType } from "../../types/emprendimentos";

export interface IEmpreendimentosRepository {
    create({ id, nome }: Omit<EmpreendimentosInputType, "torres">): Promise<any>
}

export class EmpreedimentoRepository implements IEmpreendimentosRepository {

    constructor(readonly connection: IConnection) { }

    async create({ id, nome }: Omit<EmpreendimentosInputType, "torres">): Promise<any> {


        const SQLSelect = `SELECT id, nome FROM empreendimentos WHERE id = $1`
        const empreendimento = await this.connection.query(SQLSelect, [id]);

        if (empreendimento.length > 0) {
            if (empreendimento[0].nome === nome) {
                return empreendimento[0]
            }

            throw new Exception(`realties with id [${id}] exists`, 400)
        };

        const SQLInsert = `
            INSERT INTO empreendimentos ("id","nome")
            VALUES ($1,$2)
            `;

        const data = await this.connection.query(SQLInsert, [id, nome]);
        return data.length === 0 ? null : data[0];

    }
} 