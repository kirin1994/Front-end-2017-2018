import { MechanicsComponent } from './../mechanics/mechanics.component';
import { MechanicService } from './../mechanic.service';
import { MECHANICS } from './../mock-mechanics';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Mechanic } from '../Mechanic';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-mechanic',
  templateUrl: './add-mechanic.component.html',
  styleUrls: ['./add-mechanic.component.css']
})
export class AddMechanicComponent implements OnInit {

  mechanic : Mechanic = {id:0, name : "", age :0, carSpecialization : "", salaryPerHour : 0}
  constructor(private router: Router
  ) { }

  ngOnInit() {
  }
  
  AddMechanic() :void
  {
    console.log(MECHANICS.length);
    this.mechanic.id = MECHANICS.length +1;
    MECHANICS.push(this.mechanic);
    this.router.navigate(['mechanics/' + this.mechanic.id]);
  }
}
