import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RUTAS } from './advanced/rutas/app.routes';
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { RouterMedicoComponent } from './advanced/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(RUTAS) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
