import { Customer } from '../../../models/customer.model';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-balance',
  templateUrl: './add-balance.component.html',
  styleUrls: ['./add-balance.component.css']
})
export class AddBalanceComponent implements OnInit {
  @Input() public id:any;
  @Input() public balance:any;
  
  DepositForm:FormGroup;
  
  constructor(
    private formbuilder:FormBuilder,
    private customerService:CustomerService,
    public activeModal: NgbActiveModal ,
    private notificationService:NotificationService,
  ) { 
    
  }

  ngOnInit(): void {
    this.DepositForm=this.formbuilder.group({
      deposit:['',Validators.required],
    })
  }
   Deposit(){
     const balance = this.DepositForm.value.deposit + this.balance; 
    this.customerService.updateBalance(this.id,balance).subscribe(result=>{
        if(result){
          if(result.status==200){
            this.notificationService.success("Updated Balance","Success");
          }
        }
    },
    error=>{
      this.notificationService.error(String(error.error),"Error");
     });

  }

}
