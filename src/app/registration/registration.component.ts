import { Component, OnInit } from '@angular/core';

import { CommonApiSrvService } from '../common/common-api-srv.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

// import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registerSrv:CommonApiSrvService,private toastr: ToastrService,private router:Router,private route:ActivatedRoute) {
  
  }
  
 user:any ={};
 passwordType:string ='password';
 passwordShow:boolean = false;

  ngOnInit() {
  }

  togglePassword(){
   if(this.user.password){
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
    this.user={};
  }
  register(form: NgForm){
    console.log('user',this.user)
    if(form.valid){
      // this.toastr.warning('Not sure...!','Warning',{closeButton:true});
      // this.toastr.info('ha ha ha  ...!','Info',{closeButton:true});
    
      // this.user={};
      // form.reset();
    
      
     this.registerSrv.registration(this.user).subscribe(res => {
       
      console.log('res', res);
      this.toastr.success('User registered successfully ...!','Success',{closeButton:true});
      this.router.navigate(['/login'])
       },
        (error) =>{
          console.log('errorrrrr >>>>',error);
          this.toastr.error('Try again ...!','Error',{closeButton:true});
          this.cancel();   
        }
     );
       
    }
  }

}
