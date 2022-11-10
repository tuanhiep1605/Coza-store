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
  user1 = {
    id:4 ,
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  };
  isInvalid: boolean = false;

  constructor(private authServices: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(apiForm: any) {
    if(apiForm){
      this.user.email = apiForm.controls.email.value;
      this.user.password = apiForm.controls.password.value;
    
    if(!(this.user1.password===this.user.password)&&!(this.user1.email===this.user.password)){
      console.log("aa")
      this.isInvalid = true;
      return
    }
    this.authServices.login(this.user).subscribe(
      (res: any) => {
        console.log("user", res);
        this.router.navigate(['/home']);
        localStorage.setItem('token', res['token']);

      },
      (err) => {
        this.isInvalid = true;
        console.log('err login');
      }
    );
  }
  }
}
