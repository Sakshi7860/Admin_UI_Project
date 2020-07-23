import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AddAccountComponent } from './add-account/add-account.component';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import { DialogData } from './util-classes/Dialog-data';
import { ApiService } from './services/api-service';
import { AccountData } from './util-classes/account-data';
import { EventEmitterService} from './services/event-emitter-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'routing-practice';
  openSidebar : boolean;
  routeQueryParams$: Subscription;
  data : DialogData;
  isPopUpOpened = false;
  emittedData: AccountData;

  constructor(private emitter: EventEmitterService,private dialog: MatDialog, private route: ActivatedRoute, private router: Router,
    private apiService: ApiService)
  {
    // this.routeQueryParams$ = route.queryParams.subscribe(params => {
    //   if (params['dialog']) {
    //     this.openDialog();
    //   }
    // });

  }
  ngOnInit() {
    this.emitter.dataStr.subscribe(
      data=>{
        console.log("data is: "+data.id + " "+ data.userId+" "+data.body)
        this.emittedData=data;
      }
        
    );
  }

  // openDialog() {
    
  //   const dialogRef = this.dialog.open(AddAccountComponent, {
  //     width: '250px',
  //     data: {name: this.data.name, animal: this.data.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.data.animal = result;
  //     this.router.navigate(['/add'], { relativeTo: this.route });
  //   });
  // }
  onReloadAdd()
  {
    console.log("inside click "+ this.router.url)
    // this.router.navigate([this.router.url,'add'], {relativeTo: this.route});
    this.isPopUpOpened = true;
     
     if(this.router.url == '/brokrecs-accounts')
     {
      const dialogRef= this.dialog.open(AddAccountComponent, {
       data:{}
     });
     dialogRef.afterClosed().subscribe(
      result => 
      {
        this.isPopUpOpened=false;
      }
    )
    }
    else{
      console.log("try diff")
    }
    
  }

  editAccount()
  {
    console.log("event emitted ");
    this.isPopUpOpened = true;
    // this.emitter.dataStr.subscribe(
    //   data=>
    //     console.log("data is: "+data)
        
    // );
    
    //console.log("even emitted "+ data.id + " "+data.body +" ");
    //const account= this.apiService.getData().find(c=> c.id===this.emittedData.id)
    const dialogRef= this.dialog.open(AddAccountComponent, {
      data: this.emittedData
    });
    dialogRef.afterClosed().subscribe(
      result => 
      {
        this.isPopUpOpened=false;
      }
    )

  }

  deleteAccount()
  {
    this.apiService.deleteData(this.emittedData.userId);
  }

 
  }
 

