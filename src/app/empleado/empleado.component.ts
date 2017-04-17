import { Component } from '@angular/core';

@Component({
	selector: 'empleado-tag',
	templateUrl : './empleado.html',

})
export class EmpleadoComponent{
	public nombre_componente = 'Componente de Empleado' ;
	public list_data = 'Armando Demos xD'

	public nombre:string = "Armando" ;
	public edad:number = 31 ;
	public mayorEdad:boolean = true ;
	public trabajo:Array<any> = ['Developer', 'Fron-End', 'Back-End',44] ;

	constructor(){
		this.edad = 50 ;
		console.log(this.nombre);
	}

	ngOnInit(){
		this.cambiarEdad(45);
	}

	holaMundo(){
		console.log(this.nombre);
		console.log(this.edad);
	}

	cambiarNombre(nombre){
		this.nombre = nombre ;
	}

	cambiarEdad(edad){
		this.edad = edad ;
	}


}