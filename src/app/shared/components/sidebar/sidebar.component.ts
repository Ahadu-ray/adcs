import { Component, OnInit } from '@angular/core';

export interface RoutesInfo{
  path:string,
  title:string,
}

export const SidebarRoutes:RoutesInfo[]=[
  {path:'/home/charts',title:'CHARTS'},
  {path:'/home/orders',title:'ORDERS'},
  {path:'/home/items',title:'ITEMS'},
  {path:'/home/customers',title:'CUSTOMERS'},
  {path:'/home/admincontrol',title:'ADMIN'},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  public menu:any[];
  constructor() { }

  ngOnInit(): void {
    this.menu=SidebarRoutes.filter(item=>item)
  }

}
