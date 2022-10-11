import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styles: [
  ]
})
export class RouterMedicoComponent implements OnInit {

  id: string = '';

  constructor(
    public router: Router,
    public actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params=>{
      this.id = params['id'];
    })
  }

  guardarMedico(){
    this.router.navigate(['medico', '1'])
  }

}
