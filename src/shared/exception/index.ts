export class Exception extends Error {

    readonly name;

    constructor(readonly message: any, readonly status = 400) {
        super(message);
        this.name = "ExceptionError"
    }
}