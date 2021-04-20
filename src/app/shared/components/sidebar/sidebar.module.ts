import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [SidebarComponent],
  exports:[SidebarComponent]
})
export class SidebarModule { }
