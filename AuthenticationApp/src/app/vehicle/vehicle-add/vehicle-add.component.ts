import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/models/vehicle.model';
import { VehicleTypeService } from 'src/app/services/vehicle-type.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {

  Vehicle_TypeId$!: Observable<any[]>;
  
  addVehicleRequest: Vehicle={
    id:'',
    manufacturer:'',
    model:'',
 productionyear:0,
 kilometerstraveled:0,
 vehicle_typeid:''
    
  }
  constructor(private vehicleService:VehicleService, private router:Router, private vehicletypeService:VehicleTypeService) { }

  ngOnInit(): void {
    this.Vehicle_TypeId$=this.vehicletypeService.getAllVehicle_Types();
  
   
  }
  addVehicle(){
    this.vehicleService.addVehicle(this.addVehicleRequest).subscribe({
      next:(vehicle)=>{
        this.router.navigate(['menu']);
      }
    })  }

}
