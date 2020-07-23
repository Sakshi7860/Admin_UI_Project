import { BrowserModule } from '@angular/platform-browser';
import { NgModule, EventEmitter } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RecNamesComponent } from './rec-names/rec-names.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import{MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {ResizableModule} from 'angular-resizable-element';
import { EztopsOffsetComponent } from './eztops-offset/eztops-offset.component';
import { BrokrecsAccountComponent } from './brokrecs-account/brokrecs-account.component';
import { LogoutComponent } from './logout/logout.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService} from './services/api-service';
import {EventEmitterService} from './services/event-emitter-service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AddAccountComponent} from './add-account/add-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecNamesComponent,
    EztopsOffsetComponent,
    BrokrecsAccountComponent,
    LogoutComponent,
    AddAccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    HttpClientModule,
    ResizableModule,
    DragDropModule,
    MatDialogModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [ApiService, EventEmitterService],
  entryComponents:[AddAccountComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
