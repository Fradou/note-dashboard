import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridsterModule } from 'angular-gridster2';
import { GridComponent } from './grid/grid.component';
import { TextComponent } from './cell/text/text.component';
import { TableComponent } from './cell/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    TextComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    TextComponent,
    TableComponent
  ]
})
export class AppModule { }
