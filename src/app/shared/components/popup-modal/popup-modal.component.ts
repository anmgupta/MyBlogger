import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupModalComponent>) { }

  inputName: string = "";
  inputDescription: string = "";
  ngOnInit() {
  }

  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  actionFunction() {
    const result = {
      name: this.inputName,
      description: this.inputDescription
    }
    this.dialogRef.close(result);
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close("a");
  }
}
