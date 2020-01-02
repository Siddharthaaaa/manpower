import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { ManpowerComponent } from './manpower/manpower.component';
import { PreApprovalComponent } from './manpower/pre-approval/pre-approval.component';
import { FormComponent } from './manpower/pre-approval/form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    ManpowerComponent,
    PreApprovalComponent,
    routingComponents,
    FormComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
