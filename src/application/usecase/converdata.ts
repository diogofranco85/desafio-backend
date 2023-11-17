import { Exception } from "../../shared/exception";
import { empreedimentosInputSchema } from "../../validations/empreedimentos";
import { IPayloadOrderService } from "../service/payloadOrder";
import { IPersistDataService } from "../service/persistData";

export class ConvertData {
    constructor(
        readonly playloadOrderService: IPayloadOrderService,
        readonly persistDataService: IPersistDataService
    ) { }

    async execute(input: any) {
        const { error } = empreedimentosInputSchema.validate(input, { abortEarly: true });

        if (error) throw new Exception(error.details, 422);

        const empreendimentos = this.playloadOrderService.execute(input)

        await this.persistDataService.execute(input);

        return { empreendimentos };
    }
}