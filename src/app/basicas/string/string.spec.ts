
// //Sirve para agrupar pruebas
// describe()
// //evaluación concreta
// it()

import { mensaje } from "./string";

describe( 'Pruebas de strings', () =>{
    it( 'Debe regresar un string', () =>{
        const resp = mensaje('Fernando')
        expect((typeof resp)).toBe('string') 
    } )

    it( 'Debe retornar el mismo nombre enviado', () =>{
        const name = 'Iván'
        const resp = mensaje(name)
        expect(resp).toContain(name)
    } )
});