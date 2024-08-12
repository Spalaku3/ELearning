import { Component, Input } from '@angular/core';
import { CrewDesignationsComponent } from '../crew-designations/crew-designations.component';
import { userData } from '../../Interfaces/user-data.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CrewDesignationsComponent,CommonModule],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css'
})
export class CrewComponent {

  messageForComponent:string = "Hello World";
  receivedMessage:string = "";
  childData:userData | undefined;

  parentData: userData = {
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown'
    }
  };

  receivedDataFromChild(data: userData) {
    if(data == null || data == undefined){
    throw new Error('Method not implemented.');
    }else{
      this.childData=data;
    }

    }

  recevingMessage(message:string):void{
    this.receivedMessage = message ;
  }

}
