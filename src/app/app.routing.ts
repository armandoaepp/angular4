import  { ModuleWithProviders } from '@angular/core' ;
import { Routes, RouterModule } from '@angular/router' ;

import { EmpleadoComponent } from './empleado/empleado.component'
import { FrutaComponent } from './fruta/fruta.component'

import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes = [
	{path:'', component: HomeComponent },
	{path:'home', component: HomeComponent },
	{path:'contacto', component: ContactoComponent },
	{path:'contacto/:page', component: ContactoComponent },
	{path:'empleado', component: EmpleadoComponent },
	{path:'fruta', component: FrutaComponent },
	{path:'**', component: EmpleadoComponent } ,// Cunaod hay error carga esto
];

export const AppRoutingProviders :any[] = [] ;

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);