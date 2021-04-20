import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemModel, ItemRegisterModel } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/items.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})

export class EditItemComponent implements OnInit {
  @Input() item: ItemModel;
  saveItem: ItemModel;
  editItemForm: FormGroup;
  selectedFile: FileList;
  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    public activeModal: NgbActiveModal,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.saveItem = this.item;
    this.editItemForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: new FormControl(['', Validators.required]),
      tags: new FormControl(['', Validators.required]),
      price: new FormControl(['', Validators.required]),
    });
  }
  get f() {
    return this.editItemForm.controls;
  }
  setimg(event: any) {
    this.selectedFile = event.target.files;

  }

  editItem() {
    this.saveItem.price = String(this.saveItem.price)
    if (this.editItemForm.valid) {
      this.itemService.editItem(this.saveItem._id, this.saveItem).subscribe(result => {
        if (result) {
          if (result.status = 200) {
            this.notificationService.success("Item Eddited Successfully", "Success")
            this.itemService.uploadImage(result.body._id, this.selectedFile[0]).subscribe(res => {
              console.log(res)
            }
            )
          }
          else {
            this.notificationService.error("Item Was not Eddited ", "Error")
          }
        }

      }
      ),
        error => {
          this.notificationService.error(String(error.error), "Error");
        }
    }
  }

}
