import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';

//for upload error handle
import { Observable, throwError } from 'rxjs';
import {catchError,map } from 'rxjs/operators';
// import { LocalStorage } from '@ngx-pwa/local-storage';
// import { fromPromise } from 'rxjs/observable/fromPromise';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/toArray';


@Injectable({
  providedIn: 'root'
})
export class CommonApiSrvService {
  //baseUrl: string ="http://192.168.10.23:8000/";
  
 
  constructor(private http: HttpClient) { }
  tokensave(data) {
    localStorage.setItem('token', data);
  }
  
  userSave(data){
    localStorage.setItem('user',data);
  }
  
  login(data):Observable<any> {
    return this.http.post<any>('/api/registration/login/', data)
      // return this.http.post<any>('/api/login/', data)
  }
  
  loggedInGuard(){
    // !! symbol for return boolean value ,if token available return true else false;
    return !!localStorage.getItem('token');
  }
  
  uploadFile(formData){
    return this.http.post<any>('/api/file-upload/',formData)
}
// //getEvent message

// private getEventMessage(event:HttpEvent<any>,formData){

//   switch(event.type){

//     case HttpEventType.UploadProgress:
//     return  this.fileUploadProgress(event);

//     case HttpEventType.Response:
//     return this.apiResponse(event);

//     default:
//     return `File "${formData.get('review').name}" surpising upload event: ${event.type}`
//   }
// }

// private fileUploadProgress(event){
//   const percentDone =Math.round(100 * event.loaded / event.total);
//   return { status: 'progress', message:percentDone };
// }

// private apiResponse(event){
//   return event.body;
// }

// private handleError(error : HttpErrorResponse){
// if(error.error instanceof ErrorEvent){
//   console.error("An error occured",error.message);
// }else{
//   console.error(`Backend returned code ${error.status}, ` +`body was : ${error.error}`);

// }
// return throwError('Something bad happend ,Please try again');
// }


  registration(data) {
    return this.http.post<any>( '/api/registration/register/', data);
}

}

