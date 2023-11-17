import { IConnection } from "../../infra/database";
import { Exception } from "../../shared/exception";
import { TorresInputType } from "../../types/torresInput";

export interface ITorresRepository {
    create({ id, nome, empreendimento_id }: Omit<TorresInputType, "unidades">): Promise<any>
}

export class TorresRepository implements ITorresRepository {

    constructor(readonly connection: IConnection) { }

    async create({ id, nome, empreendimento_id }: Omit<TorresInputType, "unidades">): Promise<any> {

        const SQLSelectEmpreendimento = `SELECT id FROM empreendimentos WHERE id = $1`;
        const empreedimentos = await this.connection.query(SQLSelectEmpreendimento, [empreendimento_id]);

        if (empreedimentos.length === 0) throw new Exception("realties not found")

        const SQLSelect = `SELECT id, nome, empreendimento_id  FROM torres WHERE id = $1`;
        const torre = await this.connection.query(SQLSelect, [id]);

        if (torre.length > 0) {
            if (torre[0].nome === nome && torre[0].empreendimento_id === empreendimento_id) {
                return torre[0];
            }

            throw new Exception(`building with id [${id}] exists`, 400)
        }

        const SQL = `
            INSERT INTO torres ("id","nome", empreendimento_id)
            VALUES ($1,$2,$3)
            `;
        const data = await this.connection.query(SQL, [id, nome, empreendimento_id]);
        return data.length === 0 ? null : data[0];
    }
} 