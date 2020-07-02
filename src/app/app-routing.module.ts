import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { RecNamesComponent } from './rec-names/rec-names.component';
import { EztopsOffsetComponent } from './eztops-offset/eztops-offset.component';
import { BrokrecsAccountComponent } from './brokrecs-account/brokrecs-account.component';
import { LogoutComponent } from './logout/logout.component';
// import {MatIconModule} from '@angular/material/icon';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import{MatToolbarModule} from '@angular/material/toolbar';
// import { MatSidenavModule} from '@angular/material/sidenav';
// import {MatListModule} from '@angular/material/list';
// import {MatButtonModule} from '@angular/material/button';

const appRoutes : Routes=[
    {path:'rec-names', component : RecNamesComponent },
    {path:'eztops-offset', component : EztopsOffsetComponent},
    {path:'brokrecs-accounts', component : BrokrecsAccountComponent },
    {path:'logout', component : LogoutComponent },
  
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [RouterModule]
    

})
export class AppRoutingModule{

}