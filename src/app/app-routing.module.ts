import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsListComponent } from './components/dogs-list/dogs-list.component';
import { DogsDetailComponent } from './components/dogs-detail/dogs-detail.component';

const routes: Routes = [
  { path: '', component: DogsListComponent},
  { path: 'dog/:id', component: DogsDetailComponent},
  { path: '**', component: DogsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
