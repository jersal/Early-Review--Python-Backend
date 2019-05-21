import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuardGuard } from './common/guard/auth-guard.guard';
import { DetectionAnalysisComponent } from './detection-analysis/detection-analysis.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'navbar',component:NavbarComponent,canActivate:[AuthGuardGuard],

children:[
      {path:'upload',component:UploadFileComponent},
      {path:'detection-analysis/:id',component:DetectionAnalysisComponent}
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[RegistrationComponent,LoginComponent]
