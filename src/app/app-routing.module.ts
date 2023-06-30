import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './component/list/list.component';
import { EditComponent } from './component/edit/edit.component';
import { AddComponent } from './component/add/add.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'list',component:ListComponent},
  {path:'edit',component:EditComponent},
  {path:'add',component:AddComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
