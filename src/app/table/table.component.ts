import { Component, Input, OnChanges } from '@angular/core';

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

  ngOnChanges(): void {
    this.daysOfMonth = [];
    this.dayInMonth = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0
    ).getDate();
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
  }
}
