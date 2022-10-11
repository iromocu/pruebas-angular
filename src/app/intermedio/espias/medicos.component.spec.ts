import { EMPTY, from, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
 
 
describe('MedicosComponent', () => {
 
  let componente: MedicosComponent;
  const servicio = new MedicosService(null as any);
 
  beforeEach( () => {
    componente = new MedicosComponent(servicio);
  });
 
 
  it('Init: Debe cargar los medicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];
 
    spyOn(servicio, 'getMedicos').and.callFake(()=>{
      return from([medicos]);
    })
 
    componente.ngOnInit();
 
    expect(componente.medicos.length).toBeGreaterThan(0);
  });
 
  it('Debe llamar al servidor para agregar un médico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => EMPTY);
 
    componente.agregarMedico();
 
    expect(espia).toHaveBeenCalled();
  });
 
  it('Debe agregar un nuevo medico al arreglo de medicos', () => {
    const medic = {id: 1, name: 'John'};
 
    spyOn(servicio, 'agregarMedico').and.returnValue(from([medic]));
 
    componente.agregarMedico();
 
    expect(componente.medicos.indexOf(medic)).toBeGreaterThanOrEqual(0)
  });
 
  it('Si falla la adicion, la propiedad mensajeError debe ser igual al error del servicio', () => {
    const myError = 'No se pudo agregar el medico';
 
    spyOn(servicio, 'agregarMedico').and
      .returnValue( throwError(() => myError) );
 
    componente.agregarMedico();
    expect(componente.mensajeError).toBe(myError);
  });
 
 
  it('Debe llamar al servidor para borrar medico', () => {
 
    //espia para la ventana y simular el click
    spyOn(window, 'confirm').and.returnValue(true);
 
    const spy = spyOn(servicio, 'borrarMedico').and
      .returnValue(EMPTY);
 
    componente.borrarMedico('1');
 
    expect(spy).toHaveBeenCalledWith('1');
 
  });
 
  it('No debe llamar al servidor para borrar medico', () => {
 
    spyOn(window, 'confirm').and.returnValue(false);
 
    const spy = spyOn(servicio, 'borrarMedico').and
      .returnValue(EMPTY);
 
    componente.borrarMedico('1');
 
    expect(spy).not.toHaveBeenCalledWith('1');
 
  });
 
});