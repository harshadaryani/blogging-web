import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BloggingListComponent } from './components/blogging-list/blogging-list.component';
import { ErrorComponent } from './components/error/error.component';
import { BloggingDetailComponent } from './components/blogging-detail/blogging-detail.component';
import { BloggingEditComponent } from './components/blogging-edit/blogging-edit.component';
import { BloggingAddComponent } from './components/blogging-add/blogging-add.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'blogging-list', component: BloggingListComponent },
  { path: 'blogging-detail/:id', component: BloggingDetailComponent },
  { path: 'blogging-add', component: BloggingAddComponent },
  { path: 'blogging-edit/:id', component: BloggingEditComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
