import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AwesomeListComponent} from './awesome-list/awesome-list.component';
import {AwesomeCreateComponent} from './awesome-create/awesome-create.component';
import {AwesomeEditComponent} from './awesome-edit/awesome-edit.component';
import {AwesomeDeleteComponent} from './awesome-delete/awesome-delete.component';
import {AwesomeDetailComponent} from './awesome-detail/awesome-detail.component';


const routes: Routes = [{
  path: 'awesomes', component: AwesomeListComponent
},
  {path: 'awesome-create', component: AwesomeCreateComponent
  },
  {path: 'awesomes/edit-awesome/:id', component: AwesomeEditComponent
  },
  {path: 'awesomes/delete-awesome/:id', component: AwesomeDeleteComponent
  },
  {path: 'awesomes/detail-awesome/:id', component: AwesomeDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
