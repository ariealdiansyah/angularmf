import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'projects/home/src/app/app.component';
import { AddUserComponent } from 'projects/user/src/app/add-user/add-user.component';
import { UserComponent } from 'projects/user/src/app/app.component';
import { DetailUserComponent } from 'projects/user/src/app/detail-user/detail-user.component';

const routes: Routes = [
  {
    path: '',
    // loadComponent: () =>
    //   loadRemoteModule({
    //     type: 'module',
    //     remoteEntry: 'http://localhost:5001/remoteEntry.js',
    //     exposedModule: './HomeModule'
    //   })
    //     .then(m => m.HomeComponent)
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  // {
  //   path: 'addUser',
  //   component: AddUserComponent
  // },
  // {
  //   path: 'user/:id',
  //   component: DetailUserComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
