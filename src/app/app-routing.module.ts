import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { EmptyStatusComponent } from './components/empty-status/empty-status.component';

const routes: Routes = [
  {
    path:'blog',
    component:BlogListComponent
  },
  {
    path:'blog/:id',
    component:BlogDetailsComponent
  },
  { path: '', redirectTo: '/blog', pathMatch: 'full'},
  { path: '**', component: EmptyStatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
