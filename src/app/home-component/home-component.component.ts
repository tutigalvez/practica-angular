import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadoService:EmpleadosService ) {
    //this.empleados=this.empleadoService.empleados

   }

  ngOnInit(): void {
    this.empleados=this.empleadoService.empleados;
  }

  empleados:Empleado[]=[]


  agregarEmpleado(){

    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
   // this.miServicio.muestraMensaje("Nombre del empleado" + miEmpleado.nombre);
    this.empleadoService.agregarEmpleadoServicio(miEmpleado);
  }

//comento las lineas que ya no necesito ya que estoy usando el servicio
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;


 } 


