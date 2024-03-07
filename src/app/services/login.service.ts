import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email: string, password: any){
    localStorage.setItem("token", email+"uwu"+password);
  }

  isLoggedIn(): boolean{
    if(localStorage.getItem("token")){
      return true;
    }
    return false;
  }
}
