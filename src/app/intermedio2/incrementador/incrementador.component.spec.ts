import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe mostrar la leyenda', () => {
        component.leyenda = 'Prueba leyenda'

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('Prueba')
    });


    it('Debe mostar en el input el valor', ()=>{
        component.cambiarValor(10)
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            const input = fixture.debugElement.query(By.css('input'));
            const ele = input.nativeElement
            expect(ele.value ).toBe(40)
        })

    })

    it('Debe incrementar', ()=>{
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'))

        botones[0].triggerEventHandler('click', null)
        expect(component.progreso).toBe(45)
        botones[1].triggerEventHandler('click', null)
        expect(component.progreso).toBe(50)
    })
    
    it('En el titulo del componente, debe mostrar el progreso', ()=>{
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'))
        botones[0].triggerEventHandler('click', null)
        fixture.detectChanges();
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain('45')
    })
    
});
