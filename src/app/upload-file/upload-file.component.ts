import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonApiSrvService } from '../common/common-api-srv.service';
import { HttpEventType } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor(private uploadSrv: CommonApiSrvService, private router:Router ,
    private fb: FormBuilder,private toast:ToastrService) { }
  uploadForm: FormGroup;
  error: string;
  fileUpload = { status: '', message: '', filePath: '' };

  fileTypeCheck: boolean = false;
  selectedFile: File = null;
  eventObj: any = {};
  email: string;
  fileExtension: string;
  review: any = '';

  ngOnInit() {
    this.email = localStorage.getItem('user');


    this.uploadForm = this.fb.group({
   
      file: ['', Validators.required]
    });


  }


  onSelectedFile(event) {
   
    this.fileExtension =event.target.files[0].name.split('.').pop();
    console.log('fileExtension>>>>>',this.fileExtension);
    if (this.fileExtension === "json") {
      this.fileTypeCheck = false;
    } else {
      this.fileTypeCheck = true;
    }
    //for file selection
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('file').setValue(file);
    }
  }

  upload() {
    const formData = new FormData();
    // formData.append('name', this.uploadForm.get('file').value);
    formData.append('file_upload', this.uploadForm.get('file').value);
    console.log('form data >>>>>>>>>>>>', formData)
    this.uploadSrv.uploadFile(formData).subscribe(res =>{
      this.fileUpload = res;
      console.log('response >>>>>' ,res )
      this.toast.success('Upload successfully','success')
      this.router.navigate(['/navbar/detection-analysis',res.product_id]);
    },(error)=> {
    console.log(error);
    this.toast.error('Please upload proper file ','error ')
  }    );
    //    reportProgress:true,
    //    observe: 'events'
    //  }).subscribe(res =>{
    //    if(this.eventObj.type === HttpEventType.UploadProgress){
    //      console.log('upload progress   >>> ' +Math.round(this.eventObj.loaded / this.eventObj.total) *100 + '%')

    //    }else if(this.eventObj.type === HttpEventType.Response){
    //     console.log('uploaded file>>>>', res);

    //    }
    //  });

  }
  cancel() {
    this.ngOnInit();
    this.fileTypeCheck = false;
  }


}
