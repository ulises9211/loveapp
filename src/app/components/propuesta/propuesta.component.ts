import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  accept() {
    this.router.navigate(['acepto']);
  }

}
