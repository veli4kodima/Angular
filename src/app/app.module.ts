import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ModalComponent } from './modal/modal.component';
import { TeamInfoRowComponent } from './team-info-row/team-info-row.component';
import { CellComponent } from './cell/cell.component';

@NgModule({
  declarations: [AppComponent, TableComponent, NavigationComponent, ModalComponent, TeamInfoRowComponent, CellComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
