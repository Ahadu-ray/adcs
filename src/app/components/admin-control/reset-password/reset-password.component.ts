import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private admin:AdminService,
    private notificationService:NotificationService
  ) { }

  ngOnInit(): void {
    this.resetForm=this.formBuilder.group({
      password:['',Validators.compose([Validators.required, Validators.minLength(6)])],
      newPassword:['',Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  get f(){
    return this.resetForm.controls;
  }

  Reset(){
    if (this.resetForm.valid) {
      this.admin.reset(this.f.password.value,this.f.newPassword.value).
      subscribe(result=>{
        if(result){
          if(result.status==200){
            this.notificationService.success("Password Reseted Successfully","Success");
            console.log(result)
          }
          else{
            alert(result.statusText);
          }
        }
        },
        error=>{
          this.notificationService.error(String(error.error),"Error");
            
        });
    }
  }
}