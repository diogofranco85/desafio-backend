import { close } from "fs";
import { IConnection } from "../../../src/infra/database";

class MockEmpreendimentosConnection implements IConnection {

    async query(statement: string, params: any): Promise<any> {

        if (statement.indexOf("SELECT") !== -1) {
            return [];
        }

        return [{ "id": 999, "nome": "teste" }]
    }

    async close(): Promise<any> {
        return true;
    }
}

export const mockEmpreendimentosConnection = new MockEmpreendimentosConnection()