import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from './app.home';
import { AboutComponent }  from './app.about';
const routes: Routes = [
        {path:'', redirectTo:'/home', pathMatch:'full'},
        { path: 'home', component: HomeComponent },
	    { path: 'about', component: AboutComponent }		  
	];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ } 