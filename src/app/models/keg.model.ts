export const beerStyles: string[] = ["Lager", "IPA", "Pilsner", "Gose", "Wheat", "Pale-Ale", "Sour"]

export class Keg{
  pintLeft: number = 124;

  constructor(public name: string, public brand: string, public style: string, public alcoholContent: number, public price: number){}
}
