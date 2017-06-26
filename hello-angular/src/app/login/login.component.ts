import { Component, OnInit ,Inject} from '@angular/core';

//引入服务
//import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 //第一种注入  authService : AuthService;

  userName =  "";

  constructor(@Inject("auth") private authService) {
    //第一种注入   this.authService = new AuthService();
  }

  ngOnInit() {
  }

  //点击事件
  onClick(){
   console.log(this.authService.loginWithCredentials(this.userName));
  }
}
