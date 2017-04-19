import { Component } from '@angular/core' ;

import { Router, ActivatedRoute, Params} from '@angular/router' ;


@Component({
	selector: 'contacto',
	templateUrl: './contacto.component.html'
})
export class ContactoComponent{
	public titulo = 'Pagina de Contacto de la web' ;

	public parametro ;

	constructor(
			private _route:ActivatedRoute,
			private _router:Router,
		){}

	ngOnInit(){
		// this._route.params.forEach(function(params:Params){
			// => asigna valor a las varibles de clases(salir al ambito global de clase)
		this._route.params.forEach((params:Params) => {
			this.parametro = params['page'] ;
			console.log(this.parametro);
		});
	}

	redirigir(){
		this._router.navigate(['/contacto','armando']);
	}

	redirigirDos(){
		this._router.navigate(['/home']);
	}
}

