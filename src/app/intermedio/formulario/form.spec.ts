import { FormBuilder } from "@angular/forms";
import { FormularioRegister } from "./formulario"

describe('Eventos del formulario',  ()=>{
    
    let component: FormularioRegister
    
    beforeEach( ()=>{
        component = new FormularioRegister(new FormBuilder());
    })

    it('Validar que tenga dos campos', () =>{
        expect(component.form.contains('email')).toBeTruthy()
        expect(component.form.contains('password')).toBeTruthy()
    })

    it('Email debe ser obligatorio', () =>{
        const control = component.form.get('email')
        control?.setValue('')
        expect(control?.valid).toBeFalsy();
    })

    it('Email debe ser válido', () =>{
        const control = component.form.get('email')
        control?.setValue('ricardo.romo@me.com')
        expect(control?.valid).toBeTruthy();
    })
})