import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  time: number = 30000;
  orders: OrderModel[];
  ordersMain: OrderModel[];
  status: string = 'all';
  constructor(
    private orderService: OrderService,
    private notificationService: NotificationService,
  ) { setInterval(() => { this.Orders(); }, this.time) }

  ngOnInit(): void {
    this.Orders();
  }
  Orders() {
    this.orderService.getAll().subscribe(result => {
      if (result) {
        if (result.status === 200) {
          console.log(result.body)
          this.orders = result.body;
          this.ordersMain = this.orders;
          this.orders.forEach((e) => {
            e.hav = "";
            e.items.forEach((x) => {
              e.hav = e.hav.concat(e.hav, x.item.name + ", ")

            })
            console.log(e.hav);
          })
          this.changer()
        } else {
        }
      }
    },
      error => {
        this.notificationService.error(String(error.error), "Error");
      });
  }

  selector(event: any, id: any) {
    this.orderService.setStatus(id, { status: event.target.value }).subscribe(result => {
      if (result) {
        if (result === 200) {
          this.notificationService.success("Status Changed", "Success");
        }
      }
    },
      error => {
        this.notificationService.error(String(error.error), "Error");
      })
    console.log(event)
  }

  do() {
    this.time = 10000;
  }
  // setStat(event:any){
  //   this.status=event.target.value;
  //   this.changer()
  // }
  changer() {
    if (this.status !== 'all') {
      //  this.status=event.target.value;
      this.ordersMain = this.orders.filter(y => y.status === this.status)
    }
    else {
      //  this.status="all";
      this.ordersMain = this.orders;
    }
  }
}
