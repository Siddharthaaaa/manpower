import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateSelectionComponent } from './manpower/candidate-selection/candidate-selection.component';
import { FinalApprovalComponent } from './manpower/final-approval/final-approval.component';
import { FormComponent } from './manpower/pre-approval/form/form.component';


const routes: Routes = [
  { path : 'candidate-selection', component: CandidateSelectionComponent},
  { path : 'final-approval', component: FinalApprovalComponent },
  { path : 'form', component:FormComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CandidateSelectionComponent, FinalApprovalComponent,FormComponent]
