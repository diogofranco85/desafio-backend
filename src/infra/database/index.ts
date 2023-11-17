
import pgp from "pg-promise";
import { env } from "../../shared/env";

export interface IConnection {
    query(statement: string, params: any): Promise<any>
    close(): void
}

export class PgPromiseAdapter implements IConnection {

    connection: any;

    constructor() {
        const uri = String(env.DB_URI);
        this.connection = pgp()(uri);
    }

    query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params)
    }

    close(): void {
        return this.connection.$pool.end();
    }
}