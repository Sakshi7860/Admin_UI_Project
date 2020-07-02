import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService} from '../services/api-service';
import { AccountData} from '../util-classes/account-data';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import {ResizeEvent} from 'angular-resizable-element'; 
import {SelectionModel} from '@angular/cdk/collections';
@Component({
  selector: 'app-brokrecs-account',
  templateUrl: './brokrecs-account.component.html',
  styleUrls: ['./brokrecs-account.component.css']
})
export class BrokrecsAccountComponent implements OnInit {
  selectedRow: AccountData;
  accountList: AccountData[];
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource = new MatTableDataSource<AccountData>(this.accountList);
  selection = new SelectionModel<AccountData>(true, []);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator
  @ViewChild(MatSort,  {static: true}) sort: MatSort

  constructor(private apiService: ApiService) { }

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
  
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
    this.apiService.getData().subscribe(
      data =>
      {
        this.dataSource.data= data ;
        this.paginator.length= data.length;

      }
    );
  }

  applyFilter(filterValue: string)
  {
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  masterToggle() {
    
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onSelection(data:AccountData)
  {
    console.log("selected row is: "+data.id)
    this.selectedRow=data;
  }

  highlight(highlighted : boolean)
  {
    highlighted != highlighted
  }
}
