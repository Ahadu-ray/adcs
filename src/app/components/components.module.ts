import { SidebarComponent } from './../shared/components/sidebar/sidebar.component';
import { NavbarComponent } from './../shared/components/navbar/navbar.component';
import { SidebarModule } from './../shared/components/sidebar/sidebar.module';
import { componentRoutingModule } from './components-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { ItemsComponent } from './items/items.component';
import { CustomersComponent } from './customers/customers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './items/addItem/add-item.component';
import { AddBalanceComponent } from './customers/addBalance/add-balance.component';
import { EditItemComponent } from './items/edit-item/edit-item.component';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { SignupComponent } from './admin-control/signup/signup.component';
import { ChartComponent } from './chart/chart.component';
import { ResetPasswordComponent } from './admin-control/reset-password/reset-password.component';



@NgModule({
  declarations: [WrapperComponent, NavbarComponent, CustomersComponent,ItemsComponent,OrdersComponent, AddItemComponent,AdminControlComponent, AddBalanceComponent, EditItemComponent, AdminControlComponent, SignupComponent, ChartComponent, ResetPasswordComponent,],
  imports: [
    CommonModule,
    componentRoutingModule,
    SidebarModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[WrapperComponent,FormsModule, ReactiveFormsModule]

})
export class ModulesModule { }
