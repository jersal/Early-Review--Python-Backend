import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*imported from dev-section */
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthInterceptor } from './common/auth.interceptor';
import { AuthGuardGuard } from './common/guard/auth-guard.guard';
import { DetectionAnalysisComponent } from './detection-analysis/detection-analysis.component';
import { MatTabsModule } from '@angular/material';
import { EarlyPgmComponent } from './early-pgm/early-pgm.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UploadFileComponent,
    NavbarComponent,
    DetectionAnalysisComponent,
    EarlyPgmComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 5000,     
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    })
    
  ],
  providers: [AuthGuardGuard,
    { provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
