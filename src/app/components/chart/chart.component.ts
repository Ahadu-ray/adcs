import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';
import { Chart } from 'chart.js'
import { ItemService } from 'src/app/services/items.service';
import { ItemModel } from 'src/app/models/item.model';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chart: Chart;

  @ViewChild('chart') chartElementRef: ElementRef;
  constructor(
    private itemService: ItemService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {

    this.Orders();
  }
  Orders() {
    let time = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"];
    let orderAmmount2 = [66, 87, 53, 79, 59, 80, 70];


    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: time,
        datasets: [

          {
            data: orderAmmount2,
            borderColor: "#3c3e9f",
            fill: false
          },


        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    let itemno = [43, 34, 56, 48, 50, 39];
    let foods = ["Pasta", "Enkulal Firfir", "Erteb", "Sandwitch", "Juice", "Chechebsa"]
    var ctx = document.getElementById('myChart2');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: foods,
        datasets: [

          {
            data: itemno,
            borderColor: "#3c3e9f",
            fill: false
          },


        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });


  }
}
