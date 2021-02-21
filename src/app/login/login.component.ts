import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants/app-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  inputUserName: string = "";
  inputPassword: string = "";
  showError: boolean = false;
  ngOnInit(): void {}

  


  login(): void {
    const userName = AppConstants.userName,
          password = AppConstants.password;
    // LoginModel use this model to bind
    debugger;
    console.log(this.inputPassword, this.inputUserName);
    if (this.inputUserName === userName && this.inputPassword === password) {
      this.router.navigate(['/Home']);
    } else {
      this.showError = true;
    }

  }
}
