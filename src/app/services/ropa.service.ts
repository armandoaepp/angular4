import { Injectable } from '@angular/core' ;

@Injectable()
export class RopaService{

 	public nombre_prenda = "pantalones" ;
 	public coleccion_ropa = ['Pantalon', 'Camisa', 'Polos'] ;

	prueba(nombre_prenda){
		return nombre_prenda ;
		// return this.nombre_prenda ;
	}

	addRopa(nombre_prenda:string):Array<string>{
		this.coleccion_ropa.push(nombre_prenda);

		return this.getRopa();
	}

	getRopa(){
		return this.coleccion_ropa ;
	}

	removeRopa(index:number):Array<string>{
		this.coleccion_ropa.splice(index,1);
		return this.getRopa();
	}

}
