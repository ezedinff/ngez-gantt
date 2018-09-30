import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgezGanttModule} from './ngez-gantt/ngez-gantt.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgezGanttModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
