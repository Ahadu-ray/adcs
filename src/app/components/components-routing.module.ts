import { WrapperComponent } from './wrapper/wrapper.component';
import { NgModule } from '@angular/core';
import { ItemsComponent } from './items/items.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { ChartComponent } from './chart/chart.component';
const routes:Routes=[
     {
       path:'',
       component: WrapperComponent,
       children:[ 
        {
          path: 'orders',
          component: OrdersComponent
        },
        {
          path: 'charts',
          component: ChartComponent
        },    
      {
        path: 'customers',
        component: CustomersComponent
      },
      {
        path: 'items',
        component: ItemsComponent
      },
      {
        path: 'admincontrol',
        component: AdminControlComponent
      },
      ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class componentRoutingModule{
    
}
