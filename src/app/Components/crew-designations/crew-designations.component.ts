import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userData } from '../../Interfaces/user-data.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-crew-designations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crew-designations.component.html',
  styleUrl: './crew-designations.component.css'
})
export class CrewDesignationsComponent {
  @Input() message:string = "";
  @Input() dataFromParent:userData | undefined;

  @Output() messageEvent = new EventEmitter<string>();

  @Output() dataFromChild: EventEmitter<userData> = new EventEmitter<userData>();

  childData:userData={
    name: 'Laptop',
    age: 2,
    address: {
      street: 'Tech Ave',
      city: 'Silicon Valley'
    }
  };

  handleClick(){
    this.sendMessage();
    this.sendDataToParent();
  }


  sendMessage(){
   this.messageEvent.emit("Hello from Child Component to parent Component");
  }

  sendDataToParent(){
    this.dataFromChild.emit(this.childData);
  }

}
