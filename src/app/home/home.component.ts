import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatTable } from '@angular/material/table';


import { MatDialog, MatDialogConfig } from '@angular/material';
import { PopupModalComponent } from '../shared/components/popup-modal/popup-modal.component';

export interface BlogModal {
  name: string;
  id: number;
  description: string;
  createdDate: string;
}

const ELEMENT_DATA: BlogModal[] = [
  { id: 1, name: 'My Food Blog', createdDate: '1/2/21', description: "Food Blog Description" },
  { id: 2, name: 'My Travel Blog', createdDate: '1/4/21', description: "Travel Blog Description" },
  { id: 3, name: 'My Girlfriend Blog', createdDate: '1/6/21', description: "Girlfriend Blog Description" },
  { id: 4, name: 'My Parents Blog', createdDate: '1/8/21', description: "Parents Blog Description" },
  { id: 5, name: 'My School Blog', createdDate: '1/3/21', description: "School Blog Description" },
  { id: 6, name: 'My College Blog', createdDate: '1/7/21', description: "College Blog Description" },
  { id: 7, name: 'My Friends Blog', createdDate: '1/5/21', description: "Friends Blog Description" },
  { id: 8, name: 'My Job Blog', createdDate: '1/9/21', description: "Job Blog Description" }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'createdDate', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router, public matDialog: MatDialog) { }


  ngOnInit(): void {
  }

  logout(): void {
    // LoginModel use this model to bind
    this.router.navigate(['/Login']);
  }

  openModal(action: string) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";

    const modalDialog = this.matDialog.open(PopupModalComponent, dialogConfig);

    modalDialog.afterClosed().subscribe(result => {
      debugger;
      if (action == 'Add') {
        this.addRowData(result);
      } else if (action == 'Update') {
        this.updateRowData(result.data);
      }
    });
  }

  addBlog() {
    this.openModal('Add');
  }

  deleteBlog(blog: any) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id != blog.id;
    });
  }

  addRowData(row_obj: BlogModal) {
    var d = new Date();
    this.dataSource.push({
      name: row_obj.name,
      id: 10,
      description: row_obj.description,
      createdDate: '2/22/21'
    });

  }

  updateRowData(row_obj: BlogModal) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.name = row_obj.name;
        value.createdDate = '2/22/21';
      }
      return true;
    });
  }

}
