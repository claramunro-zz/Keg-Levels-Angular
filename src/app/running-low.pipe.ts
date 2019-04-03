import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "runningLow",
  pure: false
})

export class RunningLowPipe implements PipeTransform {

  transform(input: Keg[], desiredPintLevel) {
    var output: Keg[] = [];
    if(desiredPintLevel === "lowKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pintLeft < 10) {
          output.push(input[i]);
        }
      }
      return output;

    } else {
      return input;
    }
  }
}
