import { ConvertData } from "../src/application/usecase/converdata";
import { persistData } from "./mocks/services/persistData";
import { playloadOrderService } from "./mocks/services/playOrder";

describe("Usercase", () => {
    test("ConvertData", async () => {
        const persistDataService = persistData;
        const playOrder = playloadOrderService
        const usercase = new ConvertData(playOrder, persistDataService);

        const input = {
            "realties": [
                {
                    "id": 1,
                    "title": "Burj Khalifa"
                },
            ],
            "buildings": [
                {
                    "id": 1,
                    "realtyId": 1,
                    "title": "Torre 1"
                },
            ],
            "units": [
                {
                    "id": 1,
                    "buildingId": 1,
                    "number": "15",
                    "floor": 100,
                    "type": "apartment",
                    "parkingSpaceIds": [
                        2,
                        3
                    ]
                },
            ]
        }

        const output: any = await usercase.execute(input)

        expect(output.empreendimentos.success).toBe(true)


    })
})