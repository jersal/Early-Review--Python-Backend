import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnalysisServiceService } from '../common/analysis-service.service';

@Component({
  selector: 'app-early-pgm',
  templateUrl: './early-pgm.component.html',
  styleUrls: ['./early-pgm.component.css']
})
export class EarlyPgmComponent implements OnInit {

  constructor(private analysisSrv:AnalysisServiceService,private route:ActivatedRoute) { }

  product_id:any;
  early:any ;
  ngOnInit() {
    this.product_id=localStorage.getItem('pro_id');
    this.getEarlys();
  }

    getEarlys(){
    debugger;
    let params:any ={};
    params.product_id =  this.product_id?this.product_id :null;
    this.analysisSrv.getEarly(params).subscribe((res:any)  =>{
      this.early =res.results;      
      console.log('early pgm',  this.early )

    })
  }
}
