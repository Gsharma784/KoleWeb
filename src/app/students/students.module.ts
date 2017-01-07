import { NgModule } from '@angular/core';
import { CommonModule, NgLocalization } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsDashboardComponent } from './students-dashboard/students-dashboard.component';
import { StudentsCenterComponent } from './students-center/students-center.component';
import { StudentsRouterModule } from './students-router/students-router.module';
import { StudentsEnrollmentComponent } from './students-enrollment/students-enrollment.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';



@NgModule({
  imports: [
    CommonModule,
    StudentsRouterModule
  ],
  declarations: [StudentsListComponent, StudentDetailComponent, StudentFormComponent,StudentsDashboardComponent, StudentsCenterComponent, StudentsEnrollmentComponent, StudentsAttendanceComponent],
  exports: [StudentsListComponent, StudentDetailComponent, StudentFormComponent,StudentsDashboardComponent, StudentsCenterComponent]
})
export class StudentsModule { }
