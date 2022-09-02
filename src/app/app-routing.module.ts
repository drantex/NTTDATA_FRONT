import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchClientComponent } from './pages/search-client/search-client.component';
import { ClientComponent } from './pages/client/client.component';

const routes: Routes = [
  { path: 'search-client', component: SearchClientComponent },
  { path: 'view-client', component: ClientComponent },
  { path: '', redirectTo: '/search-client', pathMatch: 'full'},
  { path: '**', redirectTo: '/search-client', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
