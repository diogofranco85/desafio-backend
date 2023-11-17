import { TipoUnidadeEnum } from "../../enum/tipoUnidade";
import { IConnection } from "../../infra/database";
import { Exception } from "../../shared/exception";


export interface IUnidadesVagasGaragemRepository {
    create({ unidade_id, vaga_de_garagem_id }: any): Promise<any>
}
export class UnidadesVagasGaragemRepository {
    constructor(readonly connection: IConnection) { }

    async create({ unidade_id, vaga_de_garagem_id }: any): Promise<any> {
        const SQLSelect = `SELECT id, tipo FROM unidades WHERE id = $1`;
        const unidade = await this.connection.query(SQLSelect, [vaga_de_garagem_id]);

        if (unidade.length > 0) {
            if (unidade[0].tipo !== TipoUnidadeEnum.VAGAS) {
                throw new Exception("Unit not is type parking");
            }
        } else {
            throw new Exception("Unit not found", 400);
        }

        const SQLSelectVagas = `SELECT unidade_id FROM unidades_vagas_garagem WHERE unidade_id = $1 AND vaga_de_garagem_id = vaga_de_garagem_id`;
        const vaga = await this.connection.query(SQLSelectVagas, [unidade_id, vaga_de_garagem_id]);

        if (vaga.length > 0) {
            return vaga[0];
        }

        const SQL = `
            INSERT INTO unidades_vagas_garagem ("unidade_id","vaga_de_garagem_id")
            VALUES ($1,$2)
        `;

        const data = await this.connection.query(SQL, [unidade_id, vaga_de_garagem_id])
        return data.length === 0 ? null : data[0];
    }
}