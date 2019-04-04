import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Input() beerStyles: string[];
  @Output() clickSender = new EventEmitter();

  filterByRunningLow: string = "all";

  editButtonClicked(kegToEdit: Keg){
    this.clickSender.emit(kegToEdit);
  }

  subtractPintClicked(kegToEdit: Keg){
    if (kegToEdit.pintLeft > 0)
      kegToEdit.pintLeft--;
  }

  onChange(optionFromMenu) {
    this.filterByRunningLow = optionFromMenu;
  }

  styleColor(keg: Keg){
    for(let i=0; i < this.beerStyles.length; i++)
    {
      if(keg.style === this.beerStyles[i])
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
