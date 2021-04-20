import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@Component({
  selector: 'app-admin-control',
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.css']
})
export class AdminControlComponent implements OnInit {
  admins:Customer[];
  constructor(
  private modalService:NgbModal,
  private adminService:AdminService,
  ) { }

  ngOnInit(): void {
    this.list()
  }

    list(){
      this.adminService.getAll().subscribe(result => {
        if (result) {
          if (result.status === 200) {
            this.admins=result.body;
          } else {  
            console.log("result.statusText")        
          }
        }
      });
    }
    open(){
      const modalRef = this.modalService.open(SignupComponent);
    }
    resetPassword(){
      const modalRef = this.modalService.open(ResetPasswordComponent);
    }

  Delete(id:any){
    this.adminService.delete(id).subscribe(result=>{
      if (result) {
        if (result.status === 200) {
        } else {          
        }
      }
    })
  }

}
