import { AuthenticationService } from 'src/app/services/authentication.service';
import { ItemService } from '../../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  addItemForm: FormGroup;
  selectedFile: FileList;
  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    public activeModal: NgbActiveModal,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.addItemForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      tags: ['', Validators.required],
      price: ['', Validators.required,]
    });
  }
  get f() {
    return this.addItemForm.controls;
  }
  setimg(event: any) {
    this.selectedFile = event.target.files;

  }

  addItem() {
    if (this.addItemForm.valid) {
      this.addItemForm.controls.price.setValue(String(this.addItemForm.controls.price.value))
      this.itemService.addItem(this.addItemForm.value).subscribe(result => {
        if (result) {
          if (result.status = 200) {
            this.notificationService.success("Item Added Successfully", "Success");
            this.itemService.uploadImage(result.body._id, this.selectedFile[0]).subscribe(res => {
              console.log(res)
            }
            )
          }
          else {
            this.notificationService.success("Item Added Successfully", "Success");
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
