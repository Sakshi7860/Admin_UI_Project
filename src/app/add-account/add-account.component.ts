import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Subscription} from 'rxjs';
import {DialogData} from '../util-classes/Dialog-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api-service';
@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {
 

  // constructor(public dialogRef: MatDialogRef<AddAccountComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data : DialogData){
  //   }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
  
  public accountForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddAccountComponent>,
    private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: any){}

    onNoClick():void
    {
      this.dialogRef.close();
    }
    ngOnInit()
    {
      this.accountForm=this.formBuilder.group(
        {
          userId:[this.data.userId, [Validators.required, Validators.maxLength(2)]],
          id:[this.data.id, [Validators.required]],
          title:[this.data.title,[Validators.required, Validators.maxLength(10)]],
          body:[this.data.body],

        }
      );
    }

    onSubmit()
    {
      if(isNaN(this.data.id))
      {
        this.apiService.addData(this.accountForm.value);
      }
      else{
        this.apiService.editData(this.accountForm.value);
      }
      this.dialogRef.close();

    }
    onCancel()
    {
      this.dialogRef.close();
    }

    public hasError = (controlName: string, errorName: string) =>{
      return this.accountForm.controls[controlName].hasError(errorName);
    }
   
  
}
