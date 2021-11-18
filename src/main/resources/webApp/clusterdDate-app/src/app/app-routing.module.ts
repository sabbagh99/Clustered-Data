import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddDealsComponent} from "./deals/add-deals/add-deals.component";

const routes: Routes = [
  {path: 'list-deals', redirectTo: '/', pathMatch: 'full'},
  {path: 'add-deals', component: AddDealsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
