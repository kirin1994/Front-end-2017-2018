import { MessageService } from './../message.service';
import { MechanicService } from './../mechanic.service';
import { Mechanic } from './../Mechanic';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-mechanic-detail',
  templateUrl: './mechanic-detail.component.html',
  styleUrls: ['./mechanic-detail.component.css'],
  providers: [MechanicService]
})
export class MechanicDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: MechanicService,
    private location: Location) { 
   
  }
  @Input() mechanic : Mechanic;

  ngOnInit() {
    this.GetMechanic();
  }

 GetMechanic() : void {
     const id = +this.route.snapshot.paramMap.get('id');
     this.heroService.getMechanic(id)
    .subscribe(mechanic => this.mechanic = mechanic);
 }
}
