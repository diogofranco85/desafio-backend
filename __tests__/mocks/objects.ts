import { TipoUnidadeEnum } from "../../src/enum/tipoUnidade"

export const realties = {
    "id": 1,
    "nome": "Burj Khalifa",
}

export const buildings1 = {
    "id": 1,
    "nome": "Torre 1",
}

export const buildings2 = {
    "id": 1,
    "nome": "Torre 2",
    "empreendimento_id": 1,
    "unidades": []
}

export const units1Apartment1 = {
    "id": 1,
    "torre_id": 1,
    "numero": "15",
    "andar": 100,
    "tipo": TipoUnidadeEnum.APARTAMENTOS,
    "vagasDeGaragemIds": [1, 2]
}

export const units1Apartment2 = {
    "id": 1,
    "numero": "15",
    "andar": 100,
    "tipo": TipoUnidadeEnum.APARTAMENTOS,
    "vagasDeGaragemIds": [1, 2]
}

export const units1ParkingSpace = {
    "id": 1,
    "torre_id": 1,
    "numero": "15",
    "andar": 100,
    "tipo": TipoUnidadeEnum.VAGAS,
}