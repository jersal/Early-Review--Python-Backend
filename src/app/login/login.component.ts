import { Component, OnInit } from '@angular/core';
import { CommonApiSrvService } from '../common/common-api-srv.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginSrv:CommonApiSrvService,private router:Router,private toastr: ToastrService) { }
  loginObj:any ={};
  resp:any ={
    token:''
  };
 passwordType:string ='password';
 passwordShow:boolean = false;

  ngOnInit() {
    // this.loginObj.email="peter@klaven";
    // this.loginObj.password="cityslicka"

    // this.loginObj.email="www@gmail.com";
    // this.loginObj.password="www"
  }

  togglePassword(){
    if(this.loginObj.password){
     if(this.passwordShow){
       this.passwordShow =false;
       this.passwordType ='password';
     }else{
       this.passwordShow =true;
       this.passwordType ='text';
     }
    }
   }

   cancel(){
    this.loginObj={};
  }


  login() {
    
    console.log('login obj >>>>', this.loginObj)
    // this.loginSrv.userSave(this.loginObj.email);
    // this.router.navigate(['navbar/upload']);

    this.loginSrv.login(this.loginObj).subscribe(res => {
      this.resp =res;
      console.log('res',res);
      if (this.resp.token) {
        this.loginSrv.userSave(this.loginObj.email);
        this.loginSrv.tokensave(this.resp.token);
       this.toastr.success("Login Successfully ...!",'success');
       this.router.navigate(['/navbar/upload']);

      }
    },
    error => {
      this.toastr.error("Invalid username or password ..!",'error');
      console.log(error);
    })
  }

}
