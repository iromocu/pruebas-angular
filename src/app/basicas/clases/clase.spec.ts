import { Jugador } from "./clase"

describe('Prueba de clases', ()=>{
    let jugador = new Jugador()

    beforeEach(()=>{
        // console.log('beforeEach');
        jugador = new Jugador()
    })
    beforeAll(()=>{
        // console.log('beforeAll');
    })
    afterAll(()=>{
        // console.log('afterAll');
    })
    afterEach(()=>{
        // console.log('afterEach');
    })

    it('Debe retornar 75 de hp, si envio 25', () =>{
        // const jugador = new Jugador()
        const resp = jugador.recibeDanio(25);
        expect(resp).toBe(75)
    })

    it('Debe retornar 50 de hp, si envio 50', () =>{
        // const jugador = new Jugador()
        const resp = jugador.recibeDanio(50);
        expect(resp).toBe(50)
    })

    it('Debe retornar 0 de hp, si envio 120', () =>{
        // const jugador = new Jugador()
        const resp = jugador.recibeDanio(120);
        expect(resp).toBe(0)
    })
})