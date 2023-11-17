import { Empreendimentos } from "../src/domain/empreedimentos"
import { Torres } from "../src/domain/torres"
import { Unidades } from "../src/domain/unidades"
import { buildings1, buildings2, realties, units1Apartment1, units1Apartment2 } from "./mocks/objects"

describe("Domains", () => {


    test("Domain unidades", () => {

        const { input: { id } } = new Unidades(units1Apartment1)

        expect(id).toBe(1)
    })

    test("Domain unidades - get id", () => {

        const unidade = new Unidades(units1Apartment1)

        expect(unidade.id).toBe(1)
    })

    test("Domain unidades - get nome", () => {

        const unidade = new Unidades(units1Apartment1)

        expect(unidade.torre_id).toBe(1)
    })

    test("Domain torres", () => {
        const torre = new Torres(buildings2)

        const { nome } = torre.getAll();
        expect(nome).toContain("Torre 2");
    })

    test("Domain torres - get id", () => {
        const torre = new Torres(buildings2)

        expect(torre.id).toBe(1);
    })

    test("Domain torres - get nome", () => {
        const torre = new Torres(buildings2)

        expect(torre.nome).toBe("Torre 2");
    })

    test("Domain torres - get empreendimento_id", () => {
        const torre = new Torres(buildings2)

        expect(torre.empreendimento_id).toBe(1);
    })

    test("Domain torres - Adicionando unidade", () => {
        const torre = new Torres(buildings2)

        torre.addUnidade(units1Apartment2)

        const { unidades } = torre.getAll();
        expect(unidades).toHaveLength(1);
    })

    test("Domain empreendimentos", () => {
        const empreendimentos = new Empreendimentos(realties);

        const { nome } = empreendimentos.getAll()
        expect(nome).toContain("Burj Khalifa");
    })

    test("Domain empreendimentos - Adicionar torres", () => {
        const empreendimentos = new Empreendimentos(realties);

        empreendimentos.addTorre(buildings2)
        empreendimentos.addTorre(buildings2)

        const { torres } = empreendimentos.getAll()
        expect(torres).toHaveLength(2);
    })
})