import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY, Subject, from } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter{
  navigate(params:any){
  }
}

class FakeActRoute{
  // params: Observable<any> = EMPTY
  private subject = new Subject();

  push(valor:any ){
    this.subject.next(valor)
  }
  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        { provide: Router, useClass: FakeRouter }, 
        { provide: ActivatedRoute, 
          useValue: {
          params: from([{id: 'nuevo'}])
        } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe redireccionar a medico cuando se guarde', ()=>{
    const router = TestBed.inject(Router)

    const spy = spyOn(router, 'navigate')

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '1'])
  }) 

  it('Debe obtener la ruta que recibe', ()=>{
    // component = fixture.componentInstance;
    // const activatedRoute: FakeActRoute = TestBed.inject(ActivatedRoute)

    // activatedRoute.push({id:'nuevo'})
    expect(component.id).toBe('nuevo')

  }) 
});
