import { IConnection } from "../../infra/database";
import { Exception } from "../../shared/exception";
import { UnidadeInputType } from "../../types/unidadesInput";

export interface IUnidadesRepository {
    create({ id, andar, numero, tipo, torre_id }: Omit<UnidadeInputType, "vagasDeGaragemIds">): Promise<any>
}

export class UnidadesRepository {

    constructor(readonly connection: IConnection) { }

    async create({ id, andar, numero, tipo, torre_id }: Omit<UnidadeInputType, "vagasDeGaragemIds">): Promise<any> {

        const SQLSelectTorre = `SELECT id FROM torres WHERE id = $1`;
        const torre = await this.connection.query(SQLSelectTorre, [torre_id])

        if (torre.length === 0) {
            throw new Exception("building not found")
        }

        const SQLSelect = `SELECT id, torre_id, numero, andar FROM unidades WHERE id = $1`;
        const unidade = await this.connection.query(SQLSelect, [id]);

        if (unidade.length > 0) {
            if (unidade[0].torre_id === torre_id && unidade[0].andar === andar && unidade[0].numero === numero) {
                return unidade[0];
            }

            throw new Exception(`building with id [${id}] exists`, 400)
        }

        const SQL = `
            INSERT INTO unidades ("id","andar", "numero", "tipo", "torre_id")
            VALUES ($1,$2,$3,$4,$5)
            `;
        const data = await this.connection.query(SQL, [id, andar, numero, tipo, torre_id]);
        return data.length === 0 ? null : data[0];

    }
} 