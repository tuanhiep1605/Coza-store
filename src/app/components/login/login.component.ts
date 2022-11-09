import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  isInvalid: boolean = false;

  constructor(private authServices: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.authServices.login(this.user).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['/home']);
        localStorage.setItem('token', res['token']);
      },
      (err) => {
        this.isInvalid = true;
      }
    );
  }
}
