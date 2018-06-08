import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { MechanicDetailComponent } from './mechanic-detail/mechanic-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MechanicService } from './mechanic.service';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { AddMechanicComponent } from './add-mechanic/add-mechanic.component';


@NgModule({
  declarations: [
    AppComponent,
    MechanicsComponent,
    MechanicDetailComponent,
    MessagesComponent,
    AddMechanicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MechanicService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
