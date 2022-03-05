import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()

export class EmpleadosService {

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){
        
    }


    empleados:Empleado[]=[
    
        new Empleado("Juan", "Díaz", "Presiente", 7500),
        new Empleado("Ana", "Martín", "Directora", 5500),
        new Empleado("María", "Garcia", "Jefa sección", 3500),
        new Empleado("Jose", "Lépez", "Administrativo", 2500),
    
    
      ];
    
    agregarEmpleadoServicio(miEmpleado:Empleado){
        
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + 
        miEmpleado.nombre + "\n" + "Salario: " + miEmpleado.salario);
        this.empleados.push(miEmpleado);
    }

    encontrarEmpleado(indice:number) {

        let empleado:Empleado=this.empleados[indice];

        return empleado;
    }

    actualizarEmpleado(indice:number, empleado:Empleado) {

        let empleadoModificado=this.empleados[indice];

        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;
    }

    eliminarEmpleado(indice:number){

      this.empleados.splice(indice,1)
      
    }

}