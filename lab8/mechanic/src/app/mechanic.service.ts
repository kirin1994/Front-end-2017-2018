import { MECHANICS } from './mock-mechanics';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Mechanic } from './Mechanic';


@Injectable()
export class MechanicService {

 constructor(private messageService: MessageService) { }

 getMechanics(): Observable<Mechanic[]> {
   return of(MECHANICS);
 }

 getMechanic(mechanicId): Observable<Mechanic> {
   console.log(MECHANICS.find(Mechanic => Mechanic.id == mechanicId))
  return of(MECHANICS.find(Mechanic => Mechanic.id == mechanicId));
}
}