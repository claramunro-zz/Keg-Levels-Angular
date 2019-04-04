import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Tap Room';

  masterKegList: Keg[] = [
    new Keg("Sour Storm", "Oakshire","Sour",6.1,5),
    new Keg("American Lager", "10 Barrell","Lager",4.3,4),
    new Keg("Outta Line", "Rouge","IPA",7.2,6)
  ];
  selectedKeg: Keg = null;

  editKeg(clickedKeg: Keg){
    this.selectedKeg = clickedKeg;
  }

  finishedEditing(){
    this.selectedKeg = null;
  }

  addToList(newKeg: Keg){
    this.masterKegList.push(newKeg);
  }
}
