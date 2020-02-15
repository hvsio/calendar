import {RouterModule, Routes} from '@angular/router';
import {DAYComponent} from './day/day.component';
import {WeekComponent} from './week/week.component';
import {MonthComponent} from './month/month.component';
import {NgModule} from '@angular/core';
import {TodosComponent} from './todos/todos.component';
import {StoriesComponent} from './stories/stories.component';
import {ProfileComponent} from './profile/profile.component';

const appRoutes: Routes = [
  { path: 'day', component: DAYComponent },
  { path: 'week', component: WeekComponent },
  { path: 'month', component: MonthComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'story', component: StoriesComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
