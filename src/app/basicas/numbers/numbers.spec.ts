import { incrementar } from './number';
describe('Prueba de números', ()=>{

    it('Retornar 100, si el número ingresado es mayor a 100', ()=>{
        const res = incrementar(300)
        expect(res).toBe(100)
    })

    it('Retornar n+1, si el número ingresado es menor a 100', ()=>{
        const res = incrementar(5)
        expect(res).toBe(6)
    })
})