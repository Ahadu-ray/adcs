import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private admin:AdminService,
    private notificationService:NotificationService,
  ) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:['',Validators.compose([Validators.required, Validators.minLength(6)])],
      password:['',Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  get f(){
    return this.loginForm.controls;
  }

  SignUp(){
    if (this.loginForm.valid) {
      this.admin.signup(this.f.username.value,this.f.password.value).
      subscribe(result=>{
        if(result){
          if(result.status==200){
            this.notificationService.success("Admin Added Successfully","Success");
            
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
