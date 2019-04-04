import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent{
  @Input() selectedKeg: Keg;
  @Input() beerStyles: string[];
  @Output() clickedDone = new EventEmitter();
  //beerStyles: string[] = ["Lager", "IPA", "Pilsner", "Gose", "Wheat", "Pale-Ale", "Sour"]

  // beerStylesList = [
  //   {id: 0, name: "Lager"},
  //   {id: 1, name: "IPA"},
  //   {id: 2, name: "Pilsner"},
  //   {id: 3, name: "Gose"},
  //   {id: 4, name: "Wheat"},
  //   {id: 5, name: "Pale-Ale"},
  //   {id: 6, name: "Sour"}
  // ];

  finishedEditing(){
    this.clickedDone.emit();
  }

  changeStyle(newStyle){
    console.log(newStyle);
    console.log(this.selectedKeg.style);
    // this.selectedKeg.style = beerStyles[parseInt(newStyleIndex)];
  }
}
