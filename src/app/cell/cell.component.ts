import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: '[app-cell]',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit, OnChanges {

  @Input() teams;
  @Input() date: Date;
  @Input() dayInMonth: number;
  @Input() daysOfMonth = [];
  @Input() holidays = [];


  ngOnInit(): void {
    
  }

  ngOnChanges(): void {

  }

}
