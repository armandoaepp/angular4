import  { Component } from '@angular/core' ;
import  { Coche } from './coche' ;
import  { PeticionesService } from '../services/peticiones.service' ;

@Component({
	selector: 'coches',
	templateUrl: './coches.component.html',
	styleUrls: ['../app.component.css'],
	providers: [PeticionesService]

})
export class CochesComponent{

	public coche:Coche ;
	public coches:Array<Coche> ;
	public articulos ;

	constructor(
			private _peticionesService: PeticionesService
		){
		this.coche  = new Coche("","","");
		this.coches  = [
			new Coche("Toyota 1 ","120","Blanco"),
			new Coche("Nissan 1 ","120","Plomo"),
		];
	}

	ngOnInit(){
		this._peticionesService.getArticulos().subscribe(
			result =>{
				this.articulos =  result ;

				if (!this.articulos) {
					console.log('error en el servidor ');
				}
				console.log(result);
			},
			error => {
				var errorMessage = <any>error;
				console.log(errorMessage);
			}
		);
		// console.log(this._peticionesService.getPrueba());
	}

	onSubmit(){
		// this.coche.push(this.coche);
		// this.coche  = new Coche("","","");
		console.log(this.coche);
	}
}
