import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalysisServiceService {

  constructor(private http: HttpClient) { }

    
  getSpamDetection(data){
    return this.http.get<any>('/api/user-product-early/',data)

}

getEarly(data){
  return this.http.get<any>('api/user-product-early/early/',data)
}


getEarlyMiddle(data){
  return this.http.get<any>('api/user-product-early/middle/',data)
}

getEarlyLaggard(data){
  return this.http.get<any>('api/user-product-early/laggard/',data)
}
   
}
