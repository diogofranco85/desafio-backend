import { IPayloadOrderService } from "../../../src/application/service/payloadOrder";

class PlayloadOrderService implements IPayloadOrderService {
    execute(payload: any): object {
        return {
            success: true,
            payload
        }
    }
}

export const playloadOrderService = new PlayloadOrderService();