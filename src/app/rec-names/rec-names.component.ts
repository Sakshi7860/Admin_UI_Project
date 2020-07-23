import { Component, OnInit,Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rec-names',
  templateUrl: './rec-names.component.html',
  styleUrls: ['./rec-names.component.css']
})
export class RecNamesComponent implements OnInit {

  ngOnInit(): void {
  }
}
