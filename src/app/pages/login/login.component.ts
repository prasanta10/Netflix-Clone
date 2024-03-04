import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email!: string;
  password!: string;
  error: string = "";

  router = inject(Router);

  onSubmit(){
    if(!this.email || !this.password){
      this.error="Please enter all the details!"
    }
    else{
      this.router.navigate(['browse'])
    }
  }
}
