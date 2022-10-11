import { obtenerSuperHeroes } from './arrays';
xdescribe('Pruebas de arreglos', () =>{
    it('Debe retornar al menos 3 superheroes', () => {
        const resp = obtenerSuperHeroes()
        expect(resp.length).toBeGreaterThanOrEqual(3)
    })

    it('Debe existir iroman y loki', () => {
        const resp = obtenerSuperHeroes()
        expect(resp).toContain('Ironman')
        expect(resp).toContain('Thor')
    })
})