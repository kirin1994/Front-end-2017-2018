
import { Component } from '@angular/core';
import { MechanicService } from './mechanic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MechanicService]
})
export class AppComponent {
  title = 'Mechanic';
}
