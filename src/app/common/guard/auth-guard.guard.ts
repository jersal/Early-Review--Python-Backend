import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonApiSrvService } from '../common-api-srv.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate  {
  
 constructor(private authSrv:CommonApiSrvService,private router:Router){}

 canActivate():boolean{
   if(this.authSrv.loggedInGuard()){
     return true;
   }else{
     this.router.navigate(['/login'])
     return false;
   }
  }
 }
