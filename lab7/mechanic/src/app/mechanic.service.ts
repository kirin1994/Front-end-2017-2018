import { MECHANICS } from './mock-mechanics';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Mechanic } from './Mechanic';


@Injectable()
export class MechanicService {

 constructor(private messageService: MessageService) { }

 getMechanics(): Observable<Mechanic[]> {
   this.messageService.add('MechanicService: fetched heroes');
   return of(MECHANICS);
 }
}