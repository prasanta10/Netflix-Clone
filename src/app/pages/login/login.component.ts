import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email!: string;
  password!: string;

  router = inject(Router);
  toastr= inject(ToastrService);
  loginService= inject(LoginService);

  ngOnInit(){
    if(this.loginService.isLoggedIn()){
      this.router.navigateByUrl('/browse');
    }
  }

  onSubmit(){
    if(!this.email || !this.password){
      this.toastr.error("Enter details in all the fields",'Retry',{timeOut:3000});
    }
    else{
      this.loginService.login(this.email, this.password);
      this.toastr.success("Successfully logged in","Logged In",{timeOut:3000});
      this.router.navigate(['browse']);
    }
  }
}
