import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors:any;
  constructor(
    private formBuilder:FormBuilder,
    private admin:AdminService,
    private router: Router,
    private authenticator: AuthenticationService,
    private notificationService:NotificationService,
  ) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:['',Validators.compose([Validators.required])],
      password:['',Validators.compose([Validators.required])],
    });
  }

  get f(){
    return this.loginForm.controls;
  }

  login(){
    if (this.loginForm.valid) {
      this.admin.login(this.f.username.value,this.f.password.value).
      subscribe(result=>{
        console.log(result)
        if(result){
          if(result.status==200){
            this.notificationService.success("Logged In Successfully","Success");
            this.authenticator.setAccessToken(result.body);
            this.router.navigate(['/home']);
          }
          else{
            this.errors=result;
            
          }
        }
        },
        error=>{
          this.notificationService.error(String(error.error),"Error");
            
        });
    }
  }


}
