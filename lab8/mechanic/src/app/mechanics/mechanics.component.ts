

import { MECHANICS } from './../mock-mechanics';
import { Component, OnInit } from '@angular/core';
import { Mechanic } from '../Mechanic';
import { MechanicService} from '../mechanic.service'



@Component({
  selector: 'app-mechanics',
  templateUrl: './mechanics.component.html',
  styleUrls: ['./mechanics.component.css'],
  providers: [MechanicService]
})
export class MechanicsComponent implements OnInit {

  selectedMechanic: Mechanic;
  mechanics : Mechanic[];
 

  constructor(private mechanicService: MechanicService) { }

  ngOnInit() {
    this.getMechanics();
  }

  onSelect(mechanic: Mechanic):void {
    this.selectedMechanic = mechanic;
  }

  getMechanics(): void {
    this.mechanicService.getMechanics()
        .subscribe(mechanics => this.mechanics = mechanics);
  }

  getMechanic(mechanicId): void {
    this.mechanicService.getMechanic(mechanicId)
        .subscribe(mechanics => this.selectedMechanic = mechanics);
  }
}
