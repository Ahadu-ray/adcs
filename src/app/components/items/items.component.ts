import { ItemModel, ItemRegisterModel } from './../../models/item.model';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemService } from '../../services/items.service';
import { AddItemComponent } from './addItem/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})


export class ItemsComponent implements OnInit {
  items: ItemModel[];
  itemsMain: ItemModel[];
  fileUrl: string;
  search: string;
  closeres: string;
  constructor(
    private itemService: ItemService,
    private modalService: NgbModal,
    private notificationService: NotificationService,
  ) {

  }

  ngOnInit(): void {

    this.Items();
  }

  openModal(item: ItemModel) {
    const modalRef = this.modalService.open(EditItemComponent);
    modalRef.componentInstance.item = item;
    modalRef.closed.subscribe(result => {
      setTimeout(() => {
        this.Items();
        console.log("done")
      }, 3000)
    })
  }

  Items() {
    this.itemService.getAll().subscribe(result => {
      if (result) {
        if (result.status === 200) {
          this.items = result.body;
          this.itemsMain = this.items;
        } else {
        }
      }
    },
      error => {
        this.notificationService.error(String(error.error), "Error");
      });
  }
  open() {
    const modalRef = this.modalService.open(AddItemComponent);
    modalRef.closed.subscribe(result => {
      setTimeout(() => {
        this.Items();
        console.log("done")
      }, 3000)
    })
  }

  delete(id: any) {
    console.log(id)
    this.itemService.delete(id).subscribe(result => {
      if (result) {
        if (result == 200) {
          this.notificationService.success("Item Deleted", "Success");
        }
      }
    },
      error => {
        this.notificationService.error(String(error.error), "Error");
      })
  }
  setStatus(event: any, id: any) {
    this.itemService.changestatus(id, event.target.checked).subscribe(result => {
      if (result) {
        if (result.status == 200) {
          this.notificationService.success("Changed Availability", "Success");

        }
      }
    },
      error => {
        this.notificationService.error(String(error.error), "Error");
      });
    this.Items();
  }

  setSearch(event: any) {
    this.search = event
    this.Search();
  }

  Search() {
    if (this.search == null || this.search == '') {
      this.itemsMain = this.items
    } else {
      this.itemsMain = this.items.filter(y => y.name.includes(this.search))
    }
  }
}
