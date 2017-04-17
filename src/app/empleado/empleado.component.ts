import { Component } from '@angular/core';

import  { Empleado } from './empleado'

@Component({
	selector: 'empleado-tag',
	templateUrl : './empleado.html',

})
export class EmpleadoComponent{
	public titulo = 'Componente de Empleado' ;

	public empleado:Empleado ;
	public trabajadores:Array<Empleado> ;
	public trabajador_externo:boolean ;

	constructor(){
		this.trabajadores = [
							new Empleado('Armando 1', 31, 'Developer 1', true),
							new Empleado('Armando 2', 32, 'Developer 2', true),
							new Empleado('Armando 3', 33, 'Developer 3', true),
							new Empleado('Armando 4', 34, 'Developer 4', false),
							new Empleado('Armando 5', 35, 'Developer 5', true),
							new Empleado('Armando 6', 36, 'Developer 6', true),
							new Empleado('Armando 7', 37, 'Developer 7', true),

						] ;


		this.trabajador_externo =  true ;
	}

	ngOnInit(){
		this.empleado = new Empleado('Armando Enrique', 30, 'Developer', true);
		console.log(this.empleado);
	}


	cambiarExterno(valor){
		this.trabajador_externo =  valor ;

	}




	/*public nombre:string = "Armando" ;
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
	}*/


}