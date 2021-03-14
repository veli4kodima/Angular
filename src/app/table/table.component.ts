import { AfterViewInit, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
  @Input() teams;
  @Input() date: Date;

  daysOfMonth = [];
  dayInMonth: number;
  holidays: any;



  ngOnChanges(): void {
    this.daysOfMonth = [];
    this.dayInMonth = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0
    ).getDate();
    this.holidays = [];
    for (let i = 1; i <= this.dayInMonth; i++) {
      this.daysOfMonth.push({
        dayName: new Date(
          this.date.getFullYear(),
          this.date.getMonth(),
          i
        ).toLocaleDateString('en-US', { weekday: 'short' }),
        numberDay: i,
      });
    }
    for(let i = 0; i < this.teams.length; i++) {
      for(let j = 0; j < this.teams[i].members.length; j++) {
        for(let k = 0; k < this.teams[i].members[j].vacations.length; k++) {
          this.holidays.push(
            {
            userName: this.teams[i].members[j].name,
            startDay: this.teams[i].members[j].vacations[k].startDate.substr(0, 2),
            endDay: this.teams[i].members[j].vacations[k].endDate.substr(0, 2),
            startMonth: this.teams[i].members[j].vacations[k].startDate.substr(3, 2),
            endMonth: this.teams[i].members[j].vacations[k].endDate.substr(3, 2),
            type: this.teams[i].members[j].vacations[k].type,
            holidaysLength: (+this.teams[i].members[j].vacations[k].endDate.substr(0, 2)) - (this.teams[i].members[j].vacations[k].startDate.substr(0, 2))
          })
        } 
      } 
    }
    console.log(this.holidays);
  }

  isDisplay:boolean = false;

  toggleDisplay(): void {
    this.isDisplay = !this.isDisplay;
  }

  public addVacantion(event): void {
    document.getElementById('modal__overlay').style.display = 'block';
   }
  


}
