import { PayloadOrderService } from "../src/application/service/payloadOrder"
import { PersistDataService } from "../src/application/service/persistData"
import { repository } from "./mocks/repository"

describe("Services", () => {

    test("Payload Order - realties", async () => {
        const payloadOrder = new PayloadOrderService()

        const payload = {
            "realties": [
                {
                    "id": 1,
                    "title": "Burj Khalifa"
                },
            ]
        }

        const output = payloadOrder.execute(payload);

        expect(output).toHaveLength(1);
    })

    test("Payload Order - realties", async () => {
        const payloadOrder = new PayloadOrderService()

        const payload = {
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
            ]
        }

        const output: any = payloadOrder.execute(payload);
        const { torres } = output[0]
        expect(torres).toHaveLength(1);
    })

    test("Payload Order - units", async () => {
        const payloadOrder = new PayloadOrderService()

        const payload = {
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
                    "parkingSpaceIds": [2, 3]
                }
            ]
        }

        const output: any = payloadOrder.execute(payload);
        const { torres } = output[0]
        const { unidades } = torres[0]
        expect(unidades).toHaveLength(1);
    })

    test("Payload Order - object void", async () => {
        const payloadOrder = new PayloadOrderService()

        const payload = {}

        const output: any = payloadOrder.execute(payload);
        expect(output).toHaveLength(0);
    })

    test("PersistData", async () => {
        const persist = new PersistDataService(repository, repository, repository, repository)

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
                    "parkingSpaceIds": [2, 3]
                }
            ]
        }

        const output = await persist.execute(input);
        expect(output).toBe(true);
    })

})