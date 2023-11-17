import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import routes from "./routes";

export interface HttpServer {
    listen(port: number): void
    pageNotFound(): void
    handlerException(): void
    middlewares(): void
}

export class ExpressAdapter implements HttpServer {

    app: any;

    constructor() {
        this.app = express();
        this.app.use(express.json());
    }

    middlewares(): void {
        this.app.use(routes);
        this.handlerException();
        this.pageNotFound()
    }

    handlerException(): void {
        this.app.use((error: any, request: Request, response: Response, next: NextFunction) => {
            let responseError = {
                code: 500,
                errorMessage: error.message,
                dateTime: (new Date()).toISOString()
            }
            if (error.name && error.name === "ExceptionError") {
                responseError.code = error.status
            }

            return response.status(responseError.code).json(responseError)
        })
    }

    pageNotFound(): void {
        this.app.all("/*", (request: Request, response: Response) => {
            return response.status(404).json({
                code: 500,
                errorMessage: "Requested service was not found"
            })
        })
    }

    listen(port: number): void {
        this.app.listen(port, () => console.log(`Service running in port: ${port}`));
    }
}