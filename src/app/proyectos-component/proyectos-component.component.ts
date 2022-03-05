import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadoService:EmpleadosService ) { }

  ngOnInit(): void {
    this.empleados=this.empleadoService.empleados;
  }

  empleados:Empleado[]=[]

volverHome(){
 this.router.navigate([""]);
}

agregarEmpleado(){

  let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
 // this.miServicio.muestraMensaje("Nombre del empleado" + miEmpleado.nombre);
  this.empleadoService.agregarEmpleadoServicio(miEmpleado);
  this.router.navigate([""]);
}

//comento las lineas que ya no necesito ya que estoy usando el servicio
cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;

}
