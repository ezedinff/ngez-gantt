import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgezGanttComponent} from './components/ngez-gantt/ngez-gantt.component';
import {NgezGanttBodyComponent} from './components/ngez-gantt-body/ngez-gantt-body.component';
import {NgezGanttHeaderComponent} from './components/ngez-gantt-header/ngez-gantt-header.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    FlexLayoutModule
  ],
  declarations: [
    NgezGanttComponent,
    NgezGanttBodyComponent,
    NgezGanttHeaderComponent
  ],
  exports: [
    NgezGanttComponent,
    NgezGanttBodyComponent,
    NgezGanttHeaderComponent
  ]
})
export class NgezGanttModule { }
