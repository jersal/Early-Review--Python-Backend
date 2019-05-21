import { Component, OnInit } from '@angular/core';
import { AnalysisServiceService } from '../common/analysis-service.service';
import { ActivatedRoute } from'@angular/router';

@Component({
  selector: 'app-detection-analysis',
  templateUrl: './detection-analysis.component.html',
  styleUrls: ['./detection-analysis.component.css']
})
export class DetectionAnalysisComponent implements OnInit {

  constructor(private analysisSrv:AnalysisServiceService,private route:ActivatedRoute) { }
  spamDetec: any;
  early: any;
  earlyMiddle: any;
  earlyLaggard: any;
  product_id:any;
  offset:any;
  search:any;


  ngOnInit() {
    this.product_id=this.route.snapshot.paramMap.get('id');
    localStorage.setItem('pro_id',this.product_id)   
    console.log('id  ',this.product_id)
    this.getSpamDetection();
    //this.getEarlys();
    // this.getEarlysMiddle();
    // this.getEarlysLaggard();
  }

  getSpamDetection(){
    let params:any={};
    params.product_id =  this.product_id?this.product_id :null;
    this.analysisSrv.getSpamDetection(params).subscribe((res:any) =>{
      this.spamDetec =res.results;      
      console.log('spam detection data ',  this.spamDetec )

    })
  }



  // getEarlysMiddle(){
  //   let params:any = {};
  //   params.product_id =  this.product_id;
  //   this.analysisSrv.getEarlyMiddle(params).subscribe(res =>{
  //     this.earlyMiddle =res.results;      
  //     console.log('early middle pgm',  this.earlyMiddle )

  //   })
  // }

  // getEarlysLaggard(){
  //   let params:any = {};
  //   params.product_id =  this.product_id;
  //   this.analysisSrv.getEarlyLaggard(params).subscribe(res =>{
  //     this.earlyLaggard =res.results;      
  //     console.log('earlylaggard pgm',  this.earlyLaggard )

  //   })
  // }
}
