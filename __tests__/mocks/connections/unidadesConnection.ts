import { close } from "fs";
import { IConnection } from "../../../src/infra/database";

class MockUnidadesConnection implements IConnection {

    async query(statement: string, params: any): Promise<any> {

        if (statement.indexOf("SELECT") !== -1) {

            if (statement.indexOf("torres") !== -1) {
                return [{ id: "9999", nome: "teste" }];
            }
            return [];
        }

        return [{ "id": 999, "nome": "teste" }]
    }

    async close(): Promise<any> {
        return true;
    }
}

export const mockUnidadesConnection = new MockUnidadesConnection()