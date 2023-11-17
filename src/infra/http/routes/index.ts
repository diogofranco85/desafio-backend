import express, { Request, Response, Router } from "express";
import { PayloadOrderService } from "../../../application/service/payloadOrder";
import { ConvertData } from "../../../application/usecase/converdata";
import { PersistDataService } from "../../../application/service/persistData";
import { EmpreedimentoRepository } from "../../../application/repository/empreendimento";
import { UnidadesRepository } from "../../../application/repository/unidades";
import { TorresRepository } from "../../../application/repository/torres";
import { PgPromiseAdapter } from "../../database";
import redoc from "redoc-express";
import { resolve } from "path";
import { UnidadesVagasGaragemRepository } from "../../../application/repository/unidadesVagasGaragem";

const routes = Router();

const connection = new PgPromiseAdapter();

routes.get("/health", (request: Request, response: Response) => {
    return response.send("ok");
})

routes.post("/", async (request: Request, response: Response) => {

    const empreedimentos = new EmpreedimentoRepository(connection);
    const torres = new TorresRepository(connection);
    const unidades = new UnidadesRepository(connection);
    const vagas = new UnidadesVagasGaragemRepository(connection);

    const payloadOrderService = new PayloadOrderService()
    const persistDataService = new PersistDataService(empreedimentos, torres, unidades, vagas)

    const controller = new ConvertData(payloadOrderService, persistDataService)

    const output = await controller.execute(request.body);
    return response.json(output);
})

const dirStatic = resolve(process.cwd(), "public");
routes.use("/public", express.static(dirStatic));

routes.use("/doc", redoc({
    title: 'Desafio backend - Otto',
    specUrl: `http://localhost:3000/public/swagger.yaml`,
    nonce: '',
    redocOptions: {
        theme: {
            colors: {
                primary: {
                    main: '#6EC5AB'
                }
            },
            typography: {
                fontFamily: `"Cabin", 'Helvetica Neue', Helvetica, Arial, sans-serif`,
                fontSize: '15px',
                lineHeight: '1.5',
                code: {
                    code: '#87E8C7',
                    backgroundColor: '#4D4D4E'
                }
            },
            menu: {
                backgroundColor: '#ffffff'
            }
        }
    }
}))

export default routes