import {RouterModule, Routes} from '@angular/router';
import {DAYComponent} from './day/day.component';
import {WeekComponent} from './week/week.component';
import {MonthComponent} from './month/month.component';
import {TodosComponent} from './todos/todos.component';
import {StoriesComponent} from './stories/stories.component';
import {ProfileComponent} from './profile/profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/day', pathMatch: 'full' },
  { path: '/day', component: DAYComponent },
  { path: '/week', component: WeekComponent },
  { path: '/month', component: MonthComponent },
  { path: '/todo', component: TodosComponent },
  { path: '/story', component: StoriesComponent },
  { path: '/profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
