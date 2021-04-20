import { Customer } from './../../models/customer.model';
import { CustomerService } from './../../services/customer.service';
import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AddBalanceComponent } from './addBalance/add-balance.component';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customersMain:Customer[];
  customers:Customer[];
  search:string;
  searching:boolean=false;
  private notificationService:NotificationService;
  constructor(
    private customerService:CustomerService,
    private modalService:NgbModal
    ) {
    }

  ngOnInit(): void {
    this.Customers();
  }
  openModal(id:any,balance:any){
    const modalRef = this.modalService.open(AddBalanceComponent);
    modalRef.componentInstance.id=id;
    modalRef.componentInstance.balance=balance;    
    modalRef.closed.subscribe(result=>{
      setTimeout(()=>{this.Customers();},3000)
    }
    )
  }

  Customers() {
    this.customerService.getAll().subscribe(result => {
     if (result) {
       if (result.status === 200) {
         this.customers=result.body;
         this.customersMain=this.customers
       } else {          
       }
     }
   });
 }

 delete(id:any){
   this.customerService.delete(id).subscribe(result=>{
     if(result){
       if(result==200){
        this.notificationService.success("Customer Deleted","Success");
       }
     }
   },
   error=>{
    this.notificationService.error(String(error.error),"Error");
   }
   )
 }

 setSearch(event:any){
this.search=event
this.Search();
}  
Search(){
  if(this.search==null||this.search==''){
    this.customersMain=this.customers
  }else
 {
   this.customersMain=this.customers.filter(y=>y.username.includes(this.search))
}
}   
}

