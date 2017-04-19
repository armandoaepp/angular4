import { Component } from '@angular/core' ;
import  { RopaService } from '../services/ropa.service'


@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	providers: [RopaService]
})
export class HomeComponent{
	public titulo = 'Pagina Principal';
	public listado_ropa:Array<string>;
	public prenda_guardar:string ;

	constructor(
		private _ropaService: RopaService
	){}

	ngOnInit(){
		this.listado_ropa =  this._ropaService.getRopa();
		console.log(this.listado_ropa);
		console.log(this._ropaService.prueba('Camisa'));
	}

	public guardarPrenda(){
		this._ropaService.addRopa(this.prenda_guardar);
		this.prenda_guardar = null ;
	}

	public eliminarPrenda(index){
		console.log(index);
		this._ropaService.removeRopa(index);
	}
}