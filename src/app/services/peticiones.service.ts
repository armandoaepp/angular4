import { Injectable } from '@angular/core' ;
import { Http, Response, Headers } from '@angular/http' ;
import 'rxjs/add/operator/map' ;
import { Observable } from 'rxjs/Observable' ;

@Injectable()
export class PeticionesService{

	public apiUrl:string = 'https://jsonplaceholder.typicode.com/posts';

	constructor(
		private _http:Http
	){}

	getPrueba(){
		return 'hola desde servicio ';
	}

	getArticulos(){
		return this._http.get(this.apiUrl)
						 .map(res => res.json());
	}

}