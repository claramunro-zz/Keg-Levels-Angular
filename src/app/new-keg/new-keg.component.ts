import { Component, Output, EventEmitter } from '@angular/core';
import { Keg, beerStyles } from '../models/keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})

export class NewKegComponent{

  @Output() clickedSave = new EventEmitter();
  newKeg: boolean = false;

  addNewKeg(name: string, brand: string, style: string, alcoholContent: number, price: number){
    let newKeg: Keg = new Keg(name, brand, beerStyles[style], alcoholContent, price);
    this.clickedSave.emit(newKeg);
    this.newKeg = false;
  }

  showForm(){
    this.newKeg = !this.newKeg;
  }
}
