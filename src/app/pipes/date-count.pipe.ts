import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date()
    let todayWithoutTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    let difference = Math.abs(value - todayWithoutTime)
    let differenceInSeconds = difference*0.001
    let dateCounter = differenceInSeconds/86400 //seconds in a day - 60 sec * 60 min * 24hrs

    if(dateCounter>=1 && value){
      return Math.floor(dateCounter)
    }
    else{
      return 0
    }
  }


}
