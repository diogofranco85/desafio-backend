import { EmpreedimentoRepository } from "../src/application/repository/empreendimento"
import { TorresRepository } from "../src/application/repository/torres";
import { UnidadesRepository } from "../src/application/repository/unidades";
import { mockEmpreendimentosConnection } from "./mocks/connections/empreendimentosConnection";
import { mockTorresConnection } from "./mocks/connections/torresConnections";
import { mockUnidadesConnection } from "./mocks/connections/unidadesConnection";
import { buildings2, realties, units1ParkingSpace } from "./mocks/objects";

describe("Repository", () => {

    test("Empreendimentos - create", async () => {
        const repository = new EmpreedimentoRepository(mockEmpreendimentosConnection)
        const output = await repository.create(realties);
        expect(output.id).toBe(999);
    })

    test("Torres - create", async () => {
        const repository = new TorresRepository(mockTorresConnection)
        const output = await repository.create(buildings2);
        expect(output.id).toBe(999);
    })

    test("Unidades - create", async () => {
        const repository = new UnidadesRepository(mockUnidadesConnection)
        const output = await repository.create(units1ParkingSpace);
        expect(output.id).toBe(999);
    })
})