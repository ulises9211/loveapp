import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acepto',
  templateUrl: './acepto.component.html',
  styleUrls: ['./acepto.component.css']
})
export class AceptoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  regresar() {
    this.router.navigate(['propuesta']);
  }
  foto() {
    this.router.navigate(['foto']);
  }

}
