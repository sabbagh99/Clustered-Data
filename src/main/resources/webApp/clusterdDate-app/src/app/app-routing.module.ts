import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddDealsComponent} from "./deals/add-deals/add-deals.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'list-deals', component: AppComponent},
  {path: 'add-deals', component: AddDealsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
