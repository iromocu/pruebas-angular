import { usuarioIngresado } from "./boolean"

describe('Pruebas de Booleanos', () =>{
    it('Debere retornar true', () =>{
        const resp = usuarioIngresado()
        expect(resp).toBeTruthy()
        // expect(resp).toBeFalsy()
    })
})