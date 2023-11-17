import Joi from "joi";

export const empreedimentosInputSchema = Joi.object().keys({
    "realties": Joi.array().items({
        "id": Joi.number().required(),
        "title": Joi.string().required()
    }).required(),
    "buildings": Joi.array().items({
        "id": Joi.number().required(),
        "realtyId": Joi.number().required(),
        "title": Joi.string().required()
    }).required(),
    "units": Joi.array().items({
        "id": Joi.number().required(),
        "buildingId": Joi.number().required(),
        "number": Joi.string().required(),
        "floor": Joi.number().required(),
        "type": Joi.string().valid("apartment", "parkingSpace").required(),
        "parkingSpaceIds": Joi.when("type", {
            is: Joi.valid("apartment"),
            then: Joi.array(),
            otherwise: Joi.forbidden()
        })
    }).required(),
})