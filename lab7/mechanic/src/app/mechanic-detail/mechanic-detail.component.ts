import { Mechanic } from './../Mechanic';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mechanic-detail',
  templateUrl: './mechanic-detail.component.html',
  styleUrls: ['./mechanic-detail.component.css']
})
export class MechanicDetailComponent implements OnInit {
  @Input() hero: Mechanic;

  constructor() { }

  ngOnInit() {
  }

}
