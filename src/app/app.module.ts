import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwesomeListComponent } from './awesome-list/awesome-list.component';
import { AwesomeCreateComponent } from './awesome-create/awesome-create.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AwesomeEditComponent } from './awesome-edit/awesome-edit.component';
import { AwesomeDeleteComponent } from './awesome-delete/awesome-delete.component';
import { AwesomeDetailComponent } from './awesome-detail/awesome-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AwesomeListComponent,
    AwesomeCreateComponent,
    AwesomeEditComponent,
    AwesomeDeleteComponent,
    AwesomeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
