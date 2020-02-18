import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar/calendar.component';
import {
  MatToolbarModule, MatGridListModule, MatButtonModule,
  MatTabsModule, MatInputModule, MatDatepickerModule, MatSelectModule, MatSnackBarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { DAYComponent } from './day/day.component';
import { WeekComponent } from './week/week.component';
import { MonthComponent } from './month/month.component';
import { TodosComponent } from './todos/todos.component';
import { StoriesComponent } from './stories/stories.component';
import { ProfileComponent } from './profile/profile.component';
import { AddNewEvComponent } from './components/add-new-ev/add-new-ev.component';
import {MatFormFieldModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { GoalsComponent } from './goals/goals.component';

const routes: Routes = [
  {path: 'day', component: DAYComponent },
  {path: 'week', component: WeekComponent },
  {path: 'month', component: MonthComponent },
  {path: 'todos', component: TodosComponent },
  {path: 'stories', component: StoriesComponent },
  {path: 'profile', component: ProfileComponent },
  {path: '', component: DAYComponent },
  {path: '**', redirectTo: 'day' }
]


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DAYComponent,
    WeekComponent,
    MonthComponent,
    TodosComponent,
    StoriesComponent,
    ProfileComponent,
    AddNewEvComponent,
    GoalsComponent
  ],
  imports: [
    HttpClientModule,
    AngularSvgIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule,
    AngularSvgIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
