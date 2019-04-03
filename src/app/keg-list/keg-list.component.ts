import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg, beerStyles } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByRunningLow: string = "all";

  editButtonClicked(kegToEdit: Keg){
    this.clickSender.emit(kegToEdit);
  }

  subtractPintClicked(kegToEdit: Keg){
    kegToEdit.pintLeft--;
  }

  onChange(optionFromMenu) {
    this.filterByRunningLow = optionFromMenu;
  }

  styleColor(keg: Keg){
    for(let i=0; i < beerStyles.length; i++)
    {
      if(keg.style === beerStyles[i])
        return "style-color" + i;
    }
  }

  styleAlcohol(keg: Keg){
    if (keg.alcoholContent > 7)
    {
      return "style-bold";
    }
  }
}
