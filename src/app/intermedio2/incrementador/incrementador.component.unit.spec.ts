import { IncrementadorComponent } from "./incrementador.component"

describe('Pruebas unitarias', ()=>{

    let component: IncrementadorComponent;

    beforeEach( ()=> component = new IncrementadorComponent() )

    it('El progreso debe ser menor siempre de 100', ()=>{
        component.progreso = 95
        component.cambiarValor(5)

        expect(component.progreso).toBe(100)
    })
})