import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private empleadoService:EmpleadosService) { }
  
  accion:number;

  ngOnInit(): void {

    this.accion=parseInt(this.route.snapshot.queryParams["accion"]);


    this.empleados=this.empleadoService.empleados;

    this.indice=this.route.snapshot.params["id"]; //aca rescatamos el id del empleado que viene en la url

    let empleado:Empleado=this.empleadoService.encontrarEmpleado(this.indice) //construimos un objeto de tipo empleado y llamo el metodo encontrarEmpleado pasansole un indice para que encuentre el empleado
   
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  
  }


  
  empleados:Empleado[]=[]
  
  volverHome(){
    this.router.navigate(["actualiza"]);
   }

  /*actualizaEmpleado(){

    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
   // this.miServicio.muestraMensaje("Nombre del empleado" + miEmpleado.nombre);
    this.empleadoService.actualizarEmpleado(this.indice,miEmpleado);
    this.router.navigate([""]);
  }

  eliminaEmpleado(){

    this.empleadoService.eliminarEmpleado(this.indice);
    this.router.navigate([""]); 

  }*/
  actualizaEmpleado(){
    
    if(this.accion==1){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
   // this.miServicio.muestraMensaje("Nombre del empleado" + miEmpleado.nombre);
    this.empleadoService.actualizarEmpleado(this.indice,miEmpleado);
    this.router.navigate([""]);
    } else {
    this.empleadoService.eliminarEmpleado(this.indice);
    this.router.navigate([""]); }
  }

  
  //comento las lineas que ya no necesito ya que estoy usando el servicio
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  indice:number;
}
