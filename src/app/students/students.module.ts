import { NgModule } from '@angular/core';
import { CommonModule, NgLocalization } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsComponent } from './students.component';
import { StudentsDashboardComponent } from './students-dashboard/students-dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StudentsListComponent, StudentDetailComponent, StudentFormComponent, StudentsComponent, StudentsDashboardComponent],
  exports: [StudentsListComponent,StudentDetailComponent,StudentFormComponent,StudentFormComponent,StudentsComponent ]
})
export class StudentsModule { }
