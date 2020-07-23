import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ApiService} from '../services/api-service';
import { AccountData} from '../util-classes/account-data';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import {ResizeEvent} from 'angular-resizable-element'; 
import {SelectionModel} from '@angular/cdk/collections';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { EventEmitterService} from '../services/event-emitter-service';
import { AddAccountComponent } from '../add-account/add-account.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-brokrecs-account',
  templateUrl: './brokrecs-account.component.html',
  styleUrls: ['./brokrecs-account.component.css']
})
export class BrokrecsAccountComponent implements OnInit {
  @Output() rowSelected= new EventEmitter<AccountData>();
  accountList: AccountData[];
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource = new MatTableDataSource<AccountData>(this.accountList);
  selection = new SelectionModel<AccountData>(true, []);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator
  @ViewChild(MatSort,  {static: true}) sort: MatSort

  constructor(private emitter: EventEmitterService, private dialog: MatDialog,private apiService: ApiService, private route:ActivatedRoute, private router: Router) { }

  onResizeEnd(event: ResizeEvent, columnName): void {
    console.log("event is: "+ event.rectangle.width+ "  column name :"+columnName);
		if (event.edges.right) {
			const cssValue = event.rectangle.width + 'px';
			const columnElts = document.getElementsByClassName('mat-column-' + columnName);
			for (let i = 0; i < columnElts.length; i++) {
				const currentEl = columnElts[i] as HTMLDivElement;
				currentEl.style.width = cssValue;
			}
		}
  }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }
  
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data=this.apiService.getData();
    // this.apiService.getData().subscribe(
    //   data =>
    //   { 
    //     this.dataSource.data= data ;
    //     this.paginator.length= data.length;

    //   }
    // );
  }

  applyFilter(filterValue: string)
  {
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  onSelection(data:AccountData)
  {
    console.log("selected row is: "+data.id)
    // this.rowSelected.emit(data)
    this.emitter.sendMessage(data);
    }

  // onReloadAdd()
  // {
  //   // console.log("inside click"+ this.route)
  //   // this.router.navigate(['add'], {relativeTo: this.route})
  //   const dialogRef= this.dialog.open(AddAccountComponent, {
  //     data:{}
  //   });
  // }

}
