import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() logout: boolean = false;

  router= inject(Router);

  loggingout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
