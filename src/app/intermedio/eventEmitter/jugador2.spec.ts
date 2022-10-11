import { Jugador2 } from "./jugador2"

describe('Emit jugador', () =>{
    let jugador: Jugador2;

    beforeEach( ()=> jugador = new Jugador2())

    it('Debe emitir un evento cuando recibe daño', ()=>{
        let nuevoHP = 0
        jugador.hpCambia.subscribe(hp =>{
            nuevoHP = hp
        })
        jugador.recibeDanio(95);

        expect(nuevoHP).toBe(5)
    })

    it('Debe emitir un evento cuando recibe daño y sobrevivir', ()=>{
        let nuevoHP = 0
        jugador.hpCambia.subscribe(hp => nuevoHP = hp)
        jugador.recibeDanio(50);
        expect(nuevoHP).toBe(50)
    })
})