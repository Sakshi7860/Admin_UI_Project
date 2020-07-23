import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { EztopsOffsetComponent } from './eztops-offset/eztops-offset.component';
import { BrokrecsAccountComponent } from './brokrecs-account/brokrecs-account.component';
import { LogoutComponent } from './logout/logout.component';
import {RecNamesComponent} from './rec-names/rec-names.component';
import { AddAccountComponent } from './add-account/add-account.component';

// import {MatIconModule} from '@angular/material/icon';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import{MatToolbarModule} from '@angular/material/toolbar';
// import { MatSidenavModule} from '@angular/material/sidenav';
// import {MatListModule} from '@angular/material/list';
// import {MatButtonModule} from '@angular/material/button';

const appRoutes : Routes=[
    {path:'rec-names', component : RecNamesComponent },
    {path:'eztops-offset', component : EztopsOffsetComponent},
    {path:'brokrecs-accounts', component : BrokrecsAccountComponent,
        // children:[
        // {
        //     path : 'add',
        //     component: AddAccountComponent
        // }
        // ]
    },
    {path:'logout', component : LogoutComponent }
    // { path : 'add', component: AddAccountComponent }
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [RouterModule]
    

})
export class AppRoutingModule{

}